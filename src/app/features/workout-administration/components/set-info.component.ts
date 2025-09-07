import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ExerciseSetForm } from '../models/exercise-set.form';

@Component({
  selector: 'app-set-info',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div
      class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium"
      [ngClass]="pillClasses"
    >
      <!-- Warmup icon -->
      @if (setForm.controls.isWarmupSet.value) {
        <mat-icon class="!text-base">local_fire_department</mat-icon>
      }

      <!-- Drop set icon -->
      @if (setForm.controls.isDropSet.value) {
        <mat-icon class="!text-base">trending_down</mat-icon>
      }

      <!-- Reps x Weight display -->
      <span>
        {{ displayText }}
      </span>
    </div>
  `,
})
export class SetInfoComponent {
  @Input({ required: true }) setForm!: ExerciseSetForm;

  get displayText(): string {
    const reps = this.setForm.controls.reps.value || 0;
    const weight = this.setForm.controls.weight.value || 0;
    return `${reps} × ${weight}kg`;
  }

  get pillClasses(): string {
    const isWarmup = this.setForm.controls.isWarmupSet.value;
    const isDrop = this.setForm.controls.isDropSet.value;

    if (isWarmup) {
      return 'pill-warmup';
    } else if (isDrop) {
      return 'pill-drop';
    } else {
      return 'pill-default';
    }
  }
}
