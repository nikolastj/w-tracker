import { Component, OnInit, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsService, Page, Workout } from '../../shared';
import { RunningWorkoutsService } from '../../shared/services/running-workouts.service';
import { RunningWorkout } from '../../shared/models/running-workout.model';
import { forkJoin } from 'rxjs';
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
        [runningWorkoutDates]="runningWorkoutDates()"
        (scrolledToTop)="onScrolledToTop()"
        (workoutDateClicked)="onWorkoutDateClicked($event)"
      >
      </app-timeline-calendar>
    </div>
  `,
})
export class WorkoutsTimelineComponent implements OnInit {
  workoutsData: Workout[] = [];
  runningWorkoutsData: RunningWorkout[] = [];
  loading = signal(true);
  workoutSelected = output<Workout>();

  // Single filter object with Date objects
  dateFilter = signal<{ fromDate: Date; toDate: Date }>({
    fromDate: new Date(new Date().setMonth(new Date().getMonth() - 4)),
    toDate: new Date(new Date().setHours(23, 59, 59, 999)),
  });

  // Workout dates for calendar highlighting
  workoutDates = signal<{ id: number; dateCreated: string }[]>([]);
  runningWorkoutDates = signal<{ id: number; dateCreated: string }[]>([]);

  constructor(
    private workoutsService: WorkoutsService,
    private runningWorkoutsService: RunningWorkoutsService,
  ) {}

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

    this.loadWorkouts(this.dateFilter());
  }

  onWorkoutDateClicked(workoutDate: { id: number; dateCreated: string }) {
    // Find the full workout data
    const workout = this.workoutsData.find((w) => w.id === workoutDate.id);
    if (workout) {
      this.workoutSelected.emit(workout);
    }
  }

  private loadInitData() {
    this.loadWorkouts(this.dateFilter());
  }

  private loadWorkouts(filter: Page) {
    this.loading.set(true);
    filter.pageSize = 120;

    forkJoin({
      workouts: this.workoutsService.getPaginatedWorkouts(filter),
      runningWorkouts: this.runningWorkoutsService.getPaginatedRunningWorkouts(filter),
    }).subscribe({
      next: ({ workouts, runningWorkouts }) => {
        const workoutsData = workouts.data || [];
        const runningWorkoutsData = runningWorkouts.data || [];

        this.workoutsData = [...this.workoutsData, ...workoutsData];
        this.runningWorkoutsData = [...this.runningWorkoutsData, ...runningWorkoutsData];

        // Create workout dates array for calendar highlighting
        this.workoutDates.set(
          this.workoutsData.map((workout) => ({
            id: workout.id,
            dateCreated: workout.dateCreated,
          })),
        );

        // Create running workout dates array for calendar highlighting
        this.runningWorkoutDates.set(
          this.runningWorkoutsData.map((workout) => ({
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
