import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule, MatCheckboxChange } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExerciseSetForm } from '../models/exercise-set.form';

@Component({
  selector: 'app-exercise-set-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <div class="flex flex-col gap-2 rounded-lg border p-2">
      <!-- Top row: Set Number, Reps, Weight, Remove Button -->
      <div class="flex items-center gap-2">
        <!-- Reps with increment buttons -->
        <div class="min-w-0 flex-1">
          <div class="mb-1 text-xs">Reps</div>
          <div class="flex items-center gap-1">
            <mat-form-field appearance="outline" class="min-w-0 max-w-20 flex-1">
              <input
                matInput
                type="number"
                min="1"
                placeholder="0"
                [formControl]="setForm.controls.reps"
                class="text-center text-sm"
              />
              @if (setForm.controls.reps.touched && setForm.controls.reps.hasError('required')) {
                <mat-error>Required</mat-error>
              }
              @if (setForm.controls.reps.touched && setForm.controls.reps.hasError('min')) {
                <mat-error>Min: 1</mat-error>
              }
            </mat-form-field>
            <div class="flex flex-col gap-1">
              <button mat-mini-fab (click)="adjustReps(1)" class=" ">
                <i class="material-icons">keyboard_arrow_up</i>
              </button>
              <button mat-mini-fab (click)="adjustReps(-1)" class=" ">
                <i class="material-icons">keyboard_arrow_down</i>
              </button>
            </div>
            <div class="flex flex-col gap-1">
              <button mat-mini-fab (click)="adjustReps(10)" class=" ">
                <i class="material-icons">keyboard_double_arrow_up</i>
              </button>
              <button mat-mini-fab (click)="adjustReps(-10)" class=" ">
                <i class="material-icons">keyboard_double_arrow_down</i>
              </button>
            </div>
          </div>
        </div>

        <!-- Weight with increment buttons -->
        <div class="min-w-0 flex-1">
          <div class="mb-1 text-xs">Weight (kg)</div>
          <div class="flex items-center gap-1">
            <mat-form-field appearance="outline" class="min-w-0 max-w-20 flex-1">
              <input
                matInput
                type="number"
                min="0"
                step="0.5"
                placeholder="0"
                [formControl]="setForm.controls.weight"
                class="text-center text-sm"
              />
              @if (
                setForm.controls.weight.touched && setForm.controls.weight.hasError('required')
              ) {
                <mat-error>Required</mat-error>
              }
              @if (setForm.controls.weight.touched && setForm.controls.weight.hasError('min')) {
                <mat-error>Min: 0</mat-error>
              }
            </mat-form-field>
            <div class="flex flex-col gap-1">
              <button mat-mini-fab (click)="adjustWeight(1)" class=" ">
                <i class="material-icons">keyboard_arrow_up</i>
              </button>
              <button mat-mini-fab (click)="adjustWeight(-1)" class=" ">
                <i class="material-icons">keyboard_arrow_down</i>
              </button>
            </div>
            <div class="flex flex-col gap-1">
              <button mat-mini-fab (click)="adjustWeight(10)" class=" ">
                <i class="material-icons">keyboard_double_arrow_up</i>
              </button>
              <button mat-mini-fab (click)="adjustWeight(-10)" class=" ">
                <i class="material-icons">keyboard_double_arrow_down</i>
              </button>
            </div>
          </div>
        </div>

        <!-- Remove Button -->
        <!-- @if (showRemoveButton) {
          <button
            mat-icon-button
            (click)="onRemove()"
            class="!h-8 !w-8 flex-shrink-0"
            matTooltip="Remove this set"
          >
            <mat-icon class="!text-lg">delete_outline</mat-icon>
          </button>
        } -->
      </div>

      <!-- Bottom row: Add Set Button and Checkboxes -->
      <div class="flex items-center justify-between gap-4">
        <button
          mat-raised-button
          color="primary"
          (click)="onAddSet()"
          [disabled]="!isSetValid || (isEditMode && !hasSelectedSet)"
          class="px-4"
        >
          <mat-icon class="mr-1">{{ addButtonIcon }}</mat-icon>
          {{ addButtonText }}
        </button>

        <div class="flex items-center gap-2 pr-2">
          <mat-checkbox
            [formControl]="setForm.controls.isWarmupSet"
            (change)="onWarmupChange($event)"
            class="text-xs"
          >
            Warmup
          </mat-checkbox>
          <mat-checkbox
            [formControl]="setForm.controls.isDropSet"
            (change)="onDropSetChange($event)"
            class="text-xs"
          >
            Drop
          </mat-checkbox>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./exercise-set-form.component.scss'],
})
export class ExerciseSetFormComponent {
  @Input({ required: true }) setForm!: ExerciseSetForm;
  @Input() showRemoveButton = true;
  @Input() isEditMode = false;
  @Input() hasSelectedSet = false;
  @Output() removeSet = new EventEmitter<void>();
  @Output() addSet = new EventEmitter<ExerciseSetForm>();

  get isSetValid(): boolean {
    return this.setForm.valid;
  }

  /**
   * Get the button text based on edit mode
   */
  get addButtonText(): string {
    if (this.isEditMode && this.hasSelectedSet) {
      return 'Update Set';
    }
    return 'Add Set';
  }

  /**
   * Get the button icon based on edit mode
   */
  get addButtonIcon(): string {
    if (this.isEditMode && this.hasSelectedSet) {
      return 'save';
    }
    return 'add';
  }

  adjustReps(delta: number): void {
    const currentValue = this.setForm.controls.reps.value || 0;
    const newValue = Math.max(1, currentValue + delta);
    this.setForm.controls.reps.setValue(newValue);
  }

  adjustWeight(delta: number): void {
    const currentValue = this.setForm.controls.weight.value || 0;
    const newValue = Math.max(0, currentValue + delta);
    this.setForm.controls.weight.setValue(newValue);
  }

  onWarmupChange(event: MatCheckboxChange): void {
    if (event.checked) {
      this.setForm.controls.isDropSet.setValue(false);
    }
  }

  onDropSetChange(event: MatCheckboxChange): void {
    if (event.checked) {
      this.setForm.controls.isWarmupSet.setValue(false);
    }
  }

  onRemove(): void {
    this.removeSet.emit();
  }

  onAddSet(): void {
    if (this.isSetValid) {
      this.addSet.emit(this.setForm);
    }
  }
}
