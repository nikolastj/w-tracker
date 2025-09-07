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
import { ExerciseSetForm } from '../models/exercise-set.form';
import { ExerciseSetFormComponent } from './exercise-set-form.component';
import { SetInfoContainerComponent } from './set-info-container.component';

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
    SetInfoContainerComponent,
  ],
  template: `
    <div class="flex flex-col gap-6">
      <!-- Exercise Info Card -->

      <!-- Sets Section -->
      <div class="flex flex-col gap-4">
        <!-- Add Set Form -->
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-medium text-gray-700">Add New Set</h3>
          <app-exercise-set-form
            [setForm]="newSetForm"
            [showRemoveButton]="false"
            (addSet)="addSet($event)"
          />
        </div>

        <!-- Existing Sets Pills -->
        @if (exerciseForm.setsArray.controls.length > 0) {
          <app-set-info-container [setsArray]="exerciseForm.setsArray" />
        } @else {
          <div class="py-4 text-center text-gray-500">
            <mat-icon class="mb-1 text-2xl">fitness_center</mat-icon>
            <p class="text-sm">
              No sets added yet. Fill in the form above and click "Add Set" to get started.
            </p>
          </div>
        }
      </div>

      <!-- Exercise Comments -->
      <!-- <div class="flex flex-col gap-4">
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
      </div> -->

      <!-- Energy Level -->
      <!-- <div class="flex flex-col gap-4">
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
          @if (exerciseForm.controls.energyLevel.value) {
            <div class="mt-2 text-center">
              <span class="text-sm font-medium">
                Energy Level: {{ exerciseForm.controls.energyLevel.value }}
              </span>
            </div>
          }
        </div>
      </div> -->
    </div>
  `,
})
export class ExerciseInstanceFormComponent {
  @Input({ required: true }) exerciseForm!: ExerciseInstanceForm;

  newSetForm = new ExerciseSetForm();

  addSet(formToAdd: ExerciseSetForm): void {
    if (formToAdd.valid) {
      // Get the form data
      const newSetData = formToAdd.getSubmitValue();

      // Calculate the next order
      const currentSets = this.exerciseForm.setsArray.value;
      const nextOrder =
        currentSets.length > 0 ? Math.max(...currentSets.map((s) => s.order || 0)) + 1 : 1;

      const setForm = new ExerciseSetForm();
      setForm.patchValue({
        ...newSetData,
        order: nextOrder,
      });

      this.exerciseForm.setsArray.push(setForm);

      const newForm = new ExerciseSetForm();
      newForm.patchValue({
        reps: newSetData.reps,
        weight: newSetData.weight,
      });
      this.newSetForm = newForm;
    }
  }
}
