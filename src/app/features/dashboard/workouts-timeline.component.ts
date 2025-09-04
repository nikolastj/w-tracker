import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineCalendarComponent } from './timeline-calendar/timeline-calendar.component';
import { WorkoutsService, Page, PageResponse, Workout } from '../../shared';
import { delay } from 'rxjs';

@Component({
  selector: 'app-workouts-timeline',
  standalone: true,
  imports: [CommonModule, TimelineCalendarComponent],
  template: `
    <div class="h-full w-full">
      <app-timeline-calendar [loading]="loading()"></app-timeline-calendar>
    </div>
  `,
})
export class WorkoutsTimelineComponent implements OnInit {
  workoutsData: PageResponse<Workout[]> | null = null;
  loading = signal(true);
  constructor(private workoutsService: WorkoutsService) {}

  ngOnInit() {
    this.loadLast4MonthsWorkouts();
  }

  private loadLast4MonthsWorkouts() {
    const today = new Date();
    const fourMonthsAgo = new Date();
    fourMonthsAgo.setMonth(today.getMonth() - 4);

    const pageRequest: Page = {
      fromDate: fourMonthsAgo.toISOString().split('T')[0],
      toDate: today.toISOString().split('T')[0],
    };

    this.workoutsService
      .getPaginatedWorkouts(pageRequest)
      .pipe(delay(1000))
      .subscribe({
        next: (data) => {
          this.workoutsData = data;
          this.loading.set(false);
        },
        error: (error) => {
          console.error('Failed to load workouts:', error);
        },
      });
  }
}
