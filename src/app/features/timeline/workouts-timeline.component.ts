import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsService, Page, Workout } from '../../shared';
import { delay } from 'rxjs';
import { TimelineCalendarComponent } from './timeline-calendar/timeline-calendar.component';

@Component({
  selector: 'app-workouts-timeline',
  standalone: true,
  imports: [CommonModule, TimelineCalendarComponent],
  template: `
    <div class="h-full w-full">
      <app-timeline-calendar
        [loading]="loading()"
        [dateFilter]="dateFilter()"
        [workoutDates]="workoutDates()"
        (scrolledToTop)="onScrolledToTop()"
      >
      </app-timeline-calendar>
    </div>
  `,
})
export class WorkoutsTimelineComponent implements OnInit {
  workoutsData: Workout[] = [];
  loading = signal(true);

  // Single filter object with Date objects
  dateFilter = signal<{ fromDate: Date; toDate: Date }>({
    fromDate: new Date(new Date().setMonth(new Date().getMonth() - 4)),
    toDate: new Date(),
  });

  // Workout dates for calendar highlighting
  workoutDates = signal<{ id: number; dateCreated: string }[]>([]);

  constructor(private workoutsService: WorkoutsService) {}

  ngOnInit() {
    this.loadInitData();
  }

  onScrolledToTop() {
    if (this.loading()) return;

    const prevFromDate = this.dateFilter().fromDate;

    this.dateFilter.set({
      fromDate: new Date(prevFromDate.getFullYear(), prevFromDate.getMonth() - 4, 1),
      toDate: prevFromDate,
    });

    this.loadWorkouts(this.dateFilter(), true);
  }

  private loadInitData() {
    this.loadWorkouts(this.dateFilter());
  }

  private loadWorkouts(filter: Page, isPrevious = false) {
    this.loading.set(true);
    filter.pageSize = 90;
    this.workoutsService
      .getPaginatedWorkouts(filter)
      .pipe(delay(isPrevious ? 500 : 1000))
      .subscribe({
        next: (data) => {
          const workouts = data.data || [];
          this.workoutsData = [...this.workoutsData, ...workouts];

          // Create workout dates array for calendar highlighting
          this.workoutDates.set(
            this.workoutsData.map((workout) => ({
              id: workout.id,
              dateCreated: workout.dateCreated,
            })),
          );

          this.loading.set(false);
        },
        error: (error) => {
          console.error('Failed to load workouts:', error);
          this.loading.set(false);
        },
      });
  }
}
