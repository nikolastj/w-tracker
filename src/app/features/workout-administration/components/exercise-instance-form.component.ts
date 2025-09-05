import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { ExerciseInstanceForm } from '../models/exercise-instance.form';
import { ExerciseSetFormComponent } from './exercise-set-form.component';

@Component({
  selector: 'app-exercise-instance-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    ExerciseSetFormComponent,
  ],
  template: `
    <div class="space-y-6">
      <!-- Exercise Info Card -->
      <mat-card class="p-4" appearance="outlined">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="text-lg font-medium">
            {{ exerciseForm.get('exerciseType')?.value?.name }}
          </h3>
          <span class="text-sm text-gray-500"> {{ exerciseForm.setsArray.length }} sets </span>
        </div>

        <!-- Exercise Description -->
        @if (exerciseForm.get('exerciseType')?.value?.description) {
          <p class="mb-4 text-sm text-gray-600">
            {{ exerciseForm.get('exerciseType')?.value?.description }}
          </p>
        }

        <!-- Exercise Equipment -->
        @if (exerciseForm.get('exerciseType')?.value?.requisiteUsed) {
          <div class="mb-4 flex items-center gap-2">
            <mat-icon class="text-gray-500">fitness_center</mat-icon>
            <span class="text-sm text-gray-600">
              Equipment: {{ exerciseForm.get('exerciseType')?.value?.requisiteUsed }}
            </span>
          </div>
        }
      </mat-card>

      <!-- Sets Section -->
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-medium">Sets</h3>
          <button mat-raised-button color="primary" (click)="addSet()" class="px-4">
            <mat-icon class="mr-1">add</mat-icon>
            Add Set
          </button>
        </div>

        <!-- Sets List -->
        @if (exerciseForm.setsArray.controls.length > 0) {
          <div class="space-y-2">
            @for (setForm of exerciseForm.setsArray.controls; track $index) {
              <app-exercise-set-form
                [setForm]="setForm"
                [showRemoveButton]="exerciseForm.setsArray.length > 1"
                (removeSet)="removeSet($index)"
              />
            }
          </div>
        } @else {
          <div class="py-8 text-center text-gray-500">
            <mat-icon class="mb-2 text-4xl">fitness_center</mat-icon>
            <p>No sets added yet. Click "Add Set" to get started.</p>
          </div>
        }
      </div>

      <!-- Exercise Comments -->
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Comments & Notes</h3>
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Exercise Comments</mat-label>
          <textarea
            matInput
            rows="3"
            placeholder="Add any notes about this exercise..."
            [formControl]="exerciseForm.controls.comment"
          ></textarea>
        </mat-form-field>
      </div>

      <!-- Energy Level -->
      <div class="space-y-4">
        <h3 class="text-lg font-medium">Energy Level</h3>
        <div class="px-4">
          <mat-slider
            [min]="1"
            [max]="10"
            [step]="1"
            [discrete]="true"
            [showTickMarks]="true"
            class="w-full"
          >
            <input matSliderThumb [formControl]="exerciseForm.controls.energyLevel" />
          </mat-slider>
          <div class="mt-1 flex justify-between text-xs text-gray-500">
            <span>Low Energy (1)</span>
            <span>High Energy (10)</span>
          </div>
          @if (exerciseForm.get('energyLevel')?.value) {
            <div class="mt-2 text-center">
              <span class="text-sm font-medium">
                Energy Level: {{ exerciseForm.get('energyLevel')?.value }}
              </span>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class ExerciseInstanceFormComponent {
  @Input({ required: true }) exerciseForm!: ExerciseInstanceForm;

  addSet(): void {
    this.exerciseForm.addSet();
  }

  removeSet(index: number): void {
    this.exerciseForm.removeSet(index);
  }
}
