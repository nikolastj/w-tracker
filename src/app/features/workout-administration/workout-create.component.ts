import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgSelectModule } from '@ng-select/ng-select';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ExerciseTypesService } from '../../shared/services/exercise-types.service';
import { ExerciseType } from '../../shared/models/exercise-type.model';
import { WorkoutForm } from './models/workout.form';
import { ExerciseInstanceForm } from './models/exercise-instance.form';
import { CanComponentDeactivate } from '../../core';

@Component({
  selector: 'app-workout-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    NgSelectModule,
  ],
  template: `
    <div class="container mx-auto max-w-4xl p-6">
      <!-- Header -->
      <div class="mb-8 hidden md:block">
        <div class="mb-4 flex items-center gap-4">
          <button mat-icon-button (click)="goBack()">
            <mat-icon>arrow_back</mat-icon>
          </button>
          <h1 class="text-3xl font-bold">Create New Workout</h1>
        </div>
        <p class="opacity-70">Design and create your custom workout routine</p>
      </div>

      <!-- Main Content Area -->
      <div class="grid gap-6">
        <!-- Workout Form -->
        @if (workoutForm) {
          <mat-card class="p-6">
            <h2 class="mb-4 text-xl font-semibold">Exercises</h2>

            <!-- Exercise List -->
            <div class="space-y-4">
              <!-- Add Exercise Section -->
              <div class="flex items-center gap-4">
                <!-- Add Exercise Button -->
                @if (!showExerciseSelect) {
                  <button
                    mat-raised-button
                    color="primary"
                    (click)="showAddExerciseDropdown()"
                    class="px-6"
                  >
                    <mat-icon class="mr-2">add</mat-icon>
                    Add New Exercise
                  </button>
                }

                <!-- Exercise Type Selector -->
                @if (showExerciseSelect) {
                  <div class="flex w-full max-w-md items-center gap-2">
                    <ng-select
                      [items]="exerciseTypes"
                      bindLabel="name"
                      placeholder="Select an exercise type..."
                      (change)="onExerciseTypeSelected($event)"
                      [loading]="isLoading"
                      class="flex-1"
                    >
                      @for (exerciseType of exerciseTypes; track exerciseType.id) {
                        <ng-option [value]="exerciseType">
                          {{ exerciseType.name }}
                        </ng-option>
                      }
                    </ng-select>
                    <button mat-icon-button (click)="cancelExerciseSelection()">
                      <mat-icon>close</mat-icon>
                    </button>
                  </div>
                }
              </div>

              <!-- Exercise expansion panels -->
              @if (workoutForm.exercisesArray.controls.length > 0) {
                <mat-accordion multi="false">
                  @for (exercise of workoutForm.exercisesArray.controls; track $index) {
                    <mat-expansion-panel>
                      <mat-expansion-panel-header>
                        <mat-panel-title>
                          {{ exercise.get('exerciseType')?.value?.name || 'New Exercise' }}
                        </mat-panel-title>
                        <mat-panel-description>
                          Click to configure this exercise
                        </mat-panel-description>
                      </mat-expansion-panel-header>

                      <div class="p-4">
                        <p class="mb-4 opacity-70">
                          This is where the exercise configuration will go. You can add sets, reps,
                          weights, etc.
                        </p>

                        <mat-card class="mb-4 p-4" appearance="outlined">
                          <div class="space-y-2">
                            <p>
                              <strong>Exercise Type:</strong>
                              {{ exercise.get('exerciseType')?.value?.name }}
                            </p>
                            <p>
                              <strong>Sets:</strong> {{ exercise.get('sets')?.value?.length || 0 }}
                            </p>
                            <p>
                              <strong>Comments:</strong>
                              {{ exercise.get('comment')?.value || 'None' }}
                            </p>
                            <p>
                              <strong>Energy Level:</strong>
                              {{ exercise.get('energyLevel')?.value || 'Not set' }}
                            </p>
                          </div>
                        </mat-card>

                        <div class="flex justify-end">
                          <button
                            mat-stroked-button
                            color="warn"
                            (click)="removeExercise($index)"
                            class="px-4"
                          >
                            <mat-icon class="mr-1">delete</mat-icon>
                            Remove Exercise
                          </button>
                        </div>
                      </div>
                    </mat-expansion-panel>
                  }
                </mat-accordion>
              }
            </div>

            <!-- Save Button -->
            <div class="mt-6 flex justify-end">
              <button
                mat-stroked-button
                color="accent"
                [disabled]="!workoutForm.valid"
                class="px-6"
              >
                <mat-icon class="mr-2">save</mat-icon>
                Save Workout
              </button>
            </div>
          </mat-card>
        }
      </div>
    </div>
  `,
})
export class WorkoutCreateComponent implements OnInit, CanComponentDeactivate {
  exerciseTypes: ExerciseType[] = [];
  isLoading = false;
  workoutForm = new WorkoutForm();
  showExerciseSelect = false;

  constructor(
    private router: Router,
    private exerciseTypesService: ExerciseTypesService,
  ) {}

  ngOnInit(): void {
    this.loadExerciseTypes();
  }

  showAddExerciseDropdown(): void {
    this.showExerciseSelect = true;
  }

  onExerciseTypeSelected(exerciseType: ExerciseType): void {
    this.workoutForm.markAsDirty();
    if (exerciseType) {
      const newExerciseForm = new ExerciseInstanceForm();
      newExerciseForm.patchValue({
        exerciseType: exerciseType,
      });

      this.workoutForm.exercisesArray.push(newExerciseForm);
      this.showExerciseSelect = false;
    }
  }

  cancelExerciseSelection(): void {
    this.showExerciseSelect = false;
  }

  removeExercise(index: number): void {
    this.workoutForm.removeExercise(index);
  }

  private loadExerciseTypes(): void {
    this.isLoading = true;
    this.exerciseTypesService
      .getExerciseTypes()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (exerciseTypes) => {
          this.exerciseTypes = exerciseTypes;
        },
      });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  canDeactivate(): boolean {
    if (!this.workoutForm.dirty) {
      return true;
    }
    return false;
  }
}
