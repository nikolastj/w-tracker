import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ExerciseSetForm } from '../models/exercise-set.form';

@Component({
  selector: 'app-exercise-set-info',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div
      class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium"
    >
      <!-- Warmup icon -->
      @if (setForm.controls.isWarmupSet.value) {
        <mat-icon class="!text-base text-orange-500">local_fire_department</mat-icon>
      }

      <!-- Drop set icon -->
      @if (setForm.controls.isDropSet.value) {
        <mat-icon class="!text-base text-blue-500">trending_down</mat-icon>
      }

      <!-- Reps x Weight display -->
      <span class="text-gray-800">
        {{ displayText }}
      </span>
    </div>
  `,
})
export class ExerciseSetInfoComponent {
  @Input({ required: true }) setForm!: ExerciseSetForm;

  get displayText(): string {
    const reps = this.setForm.controls.reps.value || 0;
    const weight = this.setForm.controls.weight.value || 0;
    return `${reps} × ${weight}kg`;
  }
}
