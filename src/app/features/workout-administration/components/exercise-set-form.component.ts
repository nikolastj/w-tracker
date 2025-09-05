import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
    <div
      class="grid grid-cols-12 items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-3"
    >
      <!-- Set Number -->
      <div class="col-span-1">
        <span class="text-sm font-medium text-gray-600"
          >Set {{ setForm.controls.order.value }}</span
        >
      </div>

      <!-- Reps -->
      <div class="col-span-2">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Reps</mat-label>
          <input
            matInput
            type="number"
            min="1"
            placeholder="0"
            [formControl]="setForm.controls.reps"
          />
          @if (setForm.controls.reps.hasError('required')) {
            <mat-error>Reps are required</mat-error>
          }
          @if (setForm.controls.reps.hasError('min')) {
            <mat-error>Must be at least 1</mat-error>
          }
        </mat-form-field>
      </div>

      <!-- Weight -->
      <div class="col-span-2">
        <mat-form-field appearance="outline" class="w-full">
          <mat-label>Weight</mat-label>
          <input
            matInput
            type="number"
            min="0"
            step="0.5"
            placeholder="0"
            [formControl]="setForm.controls.weight"
          />
          <span matTextSuffix>kg</span>
          @if (setForm.controls.weight.hasError('required')) {
            <mat-error>Weight is required</mat-error>
          }
          @if (setForm.controls.weight.hasError('min')) {
            <mat-error>Must be 0 or greater</mat-error>
          }
        </mat-form-field>
      </div>

      <!-- Warmup Set Checkbox -->
      <div class="col-span-2">
        <mat-checkbox [formControl]="setForm.controls.isWarmupSet" class="text-sm">
          Warmup
        </mat-checkbox>
      </div>

      <!-- Drop Set Checkbox -->
      <div class="col-span-2">
        <mat-checkbox [formControl]="setForm.controls.isDropSet" class="text-sm">
          Drop Set
        </mat-checkbox>
      </div>

      <!-- Remove Button -->
      <div class="col-span-3 flex justify-end">
        @if (showRemoveButton) {
          <button mat-icon-button color="warn" (click)="onRemove()" matTooltip="Remove this set">
            <mat-icon>delete_outline</mat-icon>
          </button>
        }
      </div>
    </div>
  `,
  styles: [
    `
      ::ng-deep .mat-mdc-form-field {
        .mat-mdc-text-field-wrapper {
          .mat-mdc-form-field-flex {
            .mat-mdc-form-field-infix {
              padding-block: 8px;
            }
          }
        }
      }
    `,
  ],
})
export class ExerciseSetFormComponent {
  @Input({ required: true }) setForm!: ExerciseSetForm;
  @Input() showRemoveButton = true;
  @Output() removeSet = new EventEmitter<void>();

  onRemove(): void {
    this.removeSet.emit();
  }
}
