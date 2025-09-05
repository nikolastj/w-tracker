import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-create',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule],
  template: `
    <div class="container mx-auto max-w-4xl p-6">
      <!-- Header -->
      <div class="mb-8 hidden md:block">
        <div class="mb-4 flex items-center gap-4">
          <button mat-icon-button (click)="goBack()" class="text-gray-600 hover:text-gray-800">
            <mat-icon>arrow_back</mat-icon>
          </button>
          <h1 class="text-3xl font-bold text-gray-900">Create New Workout</h1>
        </div>
        <p class="text-gray-600">Design and create your custom workout routine</p>
      </div>

      <!-- Main Content Area -->
      <div class="grid gap-6">
        <!-- Placeholder Content -->
        <mat-card class="p-6">
          <div class="py-12 text-center">
            <mat-icon class="mb-4 text-6xl text-gray-400">fitness_center</mat-icon>
            <h2 class="mb-2 text-xl font-semibold text-gray-700">Workout Creation Coming Soon</h2>
            <p class="mb-6 text-gray-500">
              This is where you'll be able to create and customize your workout routines.
            </p>

            <!-- Action Buttons -->
            <div class="flex justify-center gap-4">
              <button mat-raised-button color="primary" disabled class="px-6">
                <mat-icon class="mr-2">add</mat-icon>
                Add Exercise
              </button>

              <button mat-stroked-button color="accent" disabled class="px-6">
                <mat-icon class="mr-2">save</mat-icon>
                Save Workout
              </button>
            </div>
          </div>
        </mat-card>
      </div>
    </div>
  `,
})
export class WorkoutCreateComponent {
  constructor(private router: Router) {}

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
