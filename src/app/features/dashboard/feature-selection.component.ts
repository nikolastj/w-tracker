import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-feature-selection',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="flex h-full items-center justify-center">
      <div class="grid w-full max-w-md gap-4 p-6">
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

        <!-- Edit Workouts Button -->
        <button
          mat-raised-button
          color="warn"
          class="flex h-16 w-full items-center justify-center gap-3 text-lg font-medium"
          (click)="onEditWorkouts()"
        >
          <mat-icon>edit</mat-icon>
          Edit Workout
        </button>
      </div>
    </div>
  `,
})
export class FeatureSelectionComponent {
  onAddWorkout(): void {
    // TODO: Implement navigation to add workout feature
    console.log('Add Workout clicked');
  }

  onViewStats(): void {
    // TODO: Implement navigation to stats view
    console.log('View Stats clicked');
  }

  onEditWorkouts(): void {
    // TODO: Implement navigation to edit workouts
    console.log('Edit Workouts clicked');
  }
}
