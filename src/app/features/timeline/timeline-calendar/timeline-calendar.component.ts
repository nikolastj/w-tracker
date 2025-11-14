import {
  Component,
  Injectable,
  ViewChild,
  ElementRef,
  input,
  output,
  effect,
  computed,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCalendar, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, NativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {
  AutoScrollToBottomDirective,
  ScrollToTopDetectorDirective,
  LoaderComponent,
} from '../../../shared';

@Injectable()
export class MondayFirstDateAdapter extends NativeDateAdapter {
  override getFirstDayOfWeek(): number {
    return 1; // Monday = 1, Sunday = 0
  }
}

@Component({
  selector: 'app-timeline-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    AutoScrollToBottomDirective,
    ScrollToTopDetectorDirective,
    LoaderComponent,
  ],
  providers: [{ provide: DateAdapter, useClass: MondayFirstDateAdapter }],
  templateUrl: './timeline-calendar.component.html',
  styleUrl: './timeline-calendar.component.scss',
})
export class TimelineCalendarComponent {
  @ViewChild('timelineBody', { static: false }) timelineBody!: ElementRef;
  @ViewChildren(MatCalendar) calendars!: QueryList<MatCalendar<Date>>;

  calendarMonths: Date[] = [];

  loading = input<boolean>(false);
  dateFilter = input<{ fromDate: Date; toDate: Date }>();
  workoutDates = input<{ id: number; dateCreated: string }[]>([]);
  runningWorkoutDates = input<{ id: number; dateCreated: string }[]>([]);
  stretchWorkoutDates = input<{ id: number; dateCreated: string }[]>([]);
  scrolledToTop = output<void>();
  workoutDateClicked = output<{ id: number; dateCreated: string }>();

  private previousMonthCount = 0;

  constructor() {
    effect(() => {
      const filter = this.dateFilter();
      if (filter?.fromDate && filter?.toDate) {
        this.handleCalendarUpdate();
      }
    });

    effect(() => {
      this.workoutDatesSet();
      this.runningWorkoutDatesSet();
      this.stretchWorkoutDatesSet();
      this.calendars?.forEach((calendar) => {
        calendar.updateTodaysDate();
      });
    });
  }

  getMonthName(date: Date): { month: string; year: string } {
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.toLocaleDateString('en-US', { year: 'numeric' });
    return { month, year };
  }

  trackByMonth = (index: number, month: Date): string => {
    return `${month.getFullYear()}-${month.getMonth()}-${this.workoutDates().length}-${this.runningWorkoutDates().length}-${this.stretchWorkoutDates().length}`;
  };

  private workoutDatesSet = computed(() => {
    const workouts = this.workoutDates();
    return new Set(
      workouts.map((workout) => {
        // Extract date part directly from ISO string to avoid timezone issues
        return workout.dateCreated.split('T')[0];
      }),
    );
  });

  private runningWorkoutDatesSet = computed(() => {
    const runningWorkouts = this.runningWorkoutDates();
    return new Set(
      runningWorkouts.map((workout) => {
        // Extract date part directly from ISO string to avoid timezone issues
        return workout.dateCreated.split('T')[0];
      }),
    );
  });

  private stretchWorkoutDatesSet = computed(() => {
    const stretchWorkouts = this.stretchWorkoutDates();
    return new Set(
      stretchWorkouts.map((workout) => {
        // Extract date part directly from ISO string to avoid timezone issues
        return workout.dateCreated.split('T')[0];
      }),
    );
  });

  dateClass = (date: Date): string => {
    // Format the date as YYYY-MM-DD in local timezone to match workout dates
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    const hasWorkout = this.workoutDatesSet().has(dateStr);
    const hasRunningWorkout = this.runningWorkoutDatesSet().has(dateStr);
    const hasStretchWorkout = this.stretchWorkoutDatesSet().has(dateStr);

    // Priority rules:
    // 1. If all 3 exist (workout + running + stretch): show only workout + running (no stretch color)
    // 2. If workout + running: show workout with running box-shadow
    // 3. If workout + stretch: show workout with stretch box-shadow
    // 4. If running + stretch: show running with stretch box-shadow
    // 5. If only workout: show workout circle
    // 6. If only running: show running circle
    // 7. If only stretch: show stretch circle

    if (hasWorkout && hasRunningWorkout && hasStretchWorkout) {
      // All 3: show only workout + running (stretch is hidden)
      return 'workout-day workout-day-with-running';
    } else if (hasWorkout && hasRunningWorkout) {
      // Workout + running
      return 'workout-day workout-day-with-running';
    } else if (hasWorkout && hasStretchWorkout) {
      // Workout + stretch
      return 'workout-day workout-day-with-stretch';
    } else if (hasRunningWorkout && hasStretchWorkout) {
      // Running + stretch
      return 'running-workout-day running-workout-day-with-stretch';
    } else if (hasWorkout) {
      // Only workout
      return 'workout-day';
    } else if (hasRunningWorkout) {
      // Only running
      return 'running-workout-day';
    } else if (hasStretchWorkout) {
      // Only stretch
      return 'stretch-workout-day';
    }

    return '';
  };

  onDateSelected(date: Date | null): void {
    if (!date) return;

    // Format the date as YYYY-MM-DD to match workout dates
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const dateStr = `${year}-${month}-${day}`;

    // Find the workout for this date
    const workoutForDate = this.workoutDates().find(
      (workout) => workout.dateCreated.split('T')[0] === dateStr,
    );

    if (workoutForDate) {
      this.workoutDateClicked.emit(workoutForDate);
    }
  }

  onScrolledToTop() {
    if (!this.loading() && this.calendarMonths.length > 0) {
      this.scrolledToTop.emit();
    }
  }

  private handleCalendarUpdate() {
    const wasScrollLoad = this.calendarMonths.length > 0 && this.previousMonthCount > 0;

    if (wasScrollLoad && this.timelineBody) {
      this.preserveScrollPositionDuringUpdate();
    } else {
      this.generateCalendarMonths();
    }

    this.previousMonthCount = this.calendarMonths.length;
  }

  private preserveScrollPositionDuringUpdate() {
    if (!this.timelineBody) return;

    const scrollContainer = this.timelineBody.nativeElement;
    const currentScrollTop = scrollContainer.scrollTop;
    const currentScrollHeight = scrollContainer.scrollHeight;

    this.generateCalendarMonths();

    setTimeout(() => {
      const newScrollHeight = scrollContainer.scrollHeight;
      const addedHeight = newScrollHeight - currentScrollHeight;
      scrollContainer.scrollTop = currentScrollTop + addedHeight;
    }, 0);
  }

  private generateCalendarMonths() {
    const filter = this.dateFilter();
    if (!filter?.fromDate || !filter?.toDate) return;

    const startDate = filter.fromDate;
    const endDate = filter.toDate;

    // Generate all months that should be in the range
    const requiredMonths: Date[] = [];
    const currentDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1);

    while (currentDate <= endDate) {
      requiredMonths.push(new Date(currentDate));
      currentDate.setMonth(currentDate.getMonth() + 1);
    }

    const existingMonthKeys = new Set(
      this.calendarMonths.map((month) => `${month.getFullYear()}-${month.getMonth()}`),
    );
    const newMonths = requiredMonths.filter(
      (month) => !existingMonthKeys.has(`${month.getFullYear()}-${month.getMonth()}`),
    );

    // Keep ALL existing months (never remove previously loaded months)
    // and add new months, then sort by date
    this.calendarMonths = [...this.calendarMonths, ...newMonths].sort(
      (a, b) => a.getTime() - b.getTime(),
    );
  }
}
