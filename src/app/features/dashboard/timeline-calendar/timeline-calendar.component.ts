import { Component, Injectable, OnInit, ViewChild, ElementRef, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  NativeDateAdapter,
} from '@angular/material/core';
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
export class TimelineCalendarComponent implements OnInit {
  @ViewChild('timelineBody', { static: false }) timelineBody!: ElementRef;

  currentMonth: Date = new Date();
  calendarMonths: Date[] = [];
  numberOfCalendars: number = 4;
  private monthsToLoadOnScroll: number = 4;
  loading = input<boolean>(false);

  ngOnInit() {
    this.generateCalendarMonths();
  }

  getMonthName(date: Date): { month: string; year: string } {
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const year = date.toLocaleDateString('en-US', { year: 'numeric' });
    return { month, year };
  }

  onScrolledToTop() {
    this.loadMoreHistoricalMonths();
  }

  private loadMoreHistoricalMonths() {
    if (this.calendarMonths.length === 0 || !this.timelineBody || this.loading()) {
      return;
    }

    const scrollContainer = this.timelineBody.nativeElement;

    // Store current scroll state before adding new content
    const currentScrollTop = scrollContainer.scrollTop;
    const currentScrollHeight = scrollContainer.scrollHeight;

    const oldestMonth = this.calendarMonths[0];

    const additionalMonths: Date[] = [];
    for (let i = 1; i <= this.monthsToLoadOnScroll; i++) {
      const olderMonth = new Date(oldestMonth.getFullYear(), oldestMonth.getMonth() - i, 1);
      additionalMonths.push(olderMonth);
    }

    additionalMonths.reverse();
    this.calendarMonths = [...additionalMonths, ...this.calendarMonths];

    // Wait for DOM to update, then restore scroll position
    setTimeout(() => {
      const newScrollHeight = scrollContainer.scrollHeight;
      const addedHeight = newScrollHeight - currentScrollHeight;
      scrollContainer.scrollTop = currentScrollTop + addedHeight;
    }, 0);
  }

  private generateCalendarMonths() {
    this.calendarMonths = [];

    const currentDate = new Date();

    for (let i = this.numberOfCalendars - 1; i >= 0; i--) {
      const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      this.calendarMonths.push(monthDate);
    }
  }
}
