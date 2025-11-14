import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Workout } from '../../shared';

@Component({
  selector: 'app-feature-selection',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="flex h-full items-center justify-center">
      <div class="flex w-full max-w-md flex-col gap-4">
        @if (selectedWorkout()) {
          <!-- Selected Workout Actions -->
          <div class="p- flex flex-col items-center gap-2 rounded-md p-1 pb-4">
            <!-- Clear Selection Icon Button -->
            <div class="flex h-0 w-full overflow-visible">
              <button
                mat-icon-button
                color="primary"
                class="!rounded-lg !bg-primary opacity-50"
                (click)="clearSelection()"
                aria-label="Clear selection"
              >
                <mat-icon class="text-textOnPrimary">close</mat-icon>
              </button>
            </div>

            <p class="m-0 text-lg">
              {{ formatWorkoutDate(selectedWorkout()!.dateCreated) }}
            </p>
            <p class="m-0">{{ selectedWorkout()!.exercises.length }} exercises</p>
          </div>

          <!-- View Workout Button -->
          <button
            mat-raised-button
            color="primary"
            class="flex h-16 w-full items-center justify-center gap-3 text-lg font-medium"
            (click)="onViewWorkout()"
          >
            <mat-icon>visibility</mat-icon>
            View Workout
          </button>

          <!-- Edit Workout Button -->
          <button
            mat-raised-button
            color="accent"
            class="flex h-16 w-full items-center justify-center gap-3 text-lg font-medium"
            (click)="onEditWorkout()"
          >
            <mat-icon>edit</mat-icon>
            Edit Workout
          </button>
        } @else {
          <!-- Default Buttons -->
          <!-- Add Workout Button -->
          <button
            mat-raised-button
            color="primary"
            class="flex h-16 w-full items-center justify-center gap-3 text-lg font-medium"
            (click)="onAddWorkout()"
          >
            <mat-icon>fitness_center</mat-icon>
            Add Workout
          </button>

          <!-- Add Running Workout Button -->
          <button
            mat-raised-button
            color="primary"
            class="flex h-16 w-full items-center justify-center gap-3 text-lg font-medium"
            (click)="onAddRunningWorkout()"
          >
            <mat-icon>directions_run</mat-icon>
            Add Running Workout
          </button>

          <!-- Add Stretch Workout Button -->
          <button
            mat-raised-button
            color="primary"
            class="flex h-16 w-full items-center justify-center gap-3 text-lg font-medium"
            (click)="onAddStretchWorkout()"
          >
            <mat-icon>accessibility_new</mat-icon>
            Add Stretch Workout
          </button>

          <!-- View Stats Button -->
          <button
            mat-raised-button
            color="accent"
            class="flex h-16 w-full items-center justify-center gap-3 text-lg font-medium"
            (click)="onViewStats()"
          >
            <mat-icon>bar_chart</mat-icon>
            View Stats
          </button>
        }
      </div>
    </div>
  `,
})
export class FeatureSelectionComponent {
  selectedWorkout = input<Workout | null>(null);
  clearWorkoutSelection = output<void>();

  constructor(private router: Router) {}

  formatWorkoutDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  clearSelection(): void {
    this.clearWorkoutSelection.emit();
  }

  onAddWorkout(): void {
    this.router.navigate(['/workout/create']);
  }

  onAddRunningWorkout(): void {
    this.router.navigate(['/running-workout/create']);
  }

  onAddStretchWorkout(): void {
    this.router.navigate(['/stretch-workout/create']);
  }

  onViewStats(): void {
    // TODO: Implement navigation to stats view
    console.log('View Stats clicked');
  }

  onEditWorkout(): void {
    const workout = this.selectedWorkout();
    if (workout) {
      console.log('Edit Workout clicked for workout:', workout);
      this.router.navigate(['/workout/edit', workout.id]);
    }
  }

  onViewWorkout(): void {
    const workout = this.selectedWorkout();
    if (workout) {
      console.log('View Workout clicked for workout:', workout);
    }
  }
}
