import {
  Component,
  Injectable,
  OnInit,
  ViewChild,
  ElementRef,
  input,
  output,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
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

  calendarMonths: Date[] = [];

  loading = input<boolean>(false);
  dateFilter = input<{ fromDate: Date; toDate: Date }>();
  scrolledToTop = output<void>();

  private previousMonthCount = 0;

  constructor() {
    effect(() => {
      const filter = this.dateFilter();
      if (filter?.fromDate && filter?.toDate) {
        this.handleCalendarUpdate();
      }
    });
  }

  getMonthName(date: Date): { month: string; year: string } {
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.toLocaleDateString('en-US', { year: 'numeric' });
    return { month, year };
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
