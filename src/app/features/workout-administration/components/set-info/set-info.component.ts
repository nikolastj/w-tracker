import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ExerciseSetForm } from '../../models/exercise-set.form';

@Component({
  selector: 'app-set-info',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div
      class="set-pill bg-primary text-textOnPrimary inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium"
      [ngClass]="pillClasses"
      [class.cursor-pointer]="isClickable"
      [class.ring-2]="isSelected"
      [class.ring-blue-400]="isSelected"
      [class.small-layout]="isSmallView"
    >
      <!-- Warmup icon -->
      @if (setForm.controls.isWarmupSet.value) {
        <mat-icon class="opacity-50">local_fire_department</mat-icon>
      }

      <!-- Drop set icon -->
      @if (setForm.controls.isDropSet.value && !isSmallView) {
        <mat-icon>trending_down</mat-icon>
      }

      <!-- Reps x Weight display -->
      <span>
        {{ displayText }}
      </span>
    </div>
  `,
  styleUrls: ['./set-info.scss'],
})
export class SetInfoComponent {
  @Input({ required: true }) setForm!: ExerciseSetForm;
  @Input() hasDropAfter = false;
  @Input() isClickable = false;
  @Input() isSelected = false;
  @Input() isSmallView = false;

  get displayText(): string {
    const reps = this.setForm.controls.reps.value || 0;
    const weight = this.setForm.controls.weight.value || 0;
    return `${reps} × ${weight}kg`;
  }

  get pillClasses(): string {
    const isWarmup = this.setForm.controls.isWarmupSet.value;
    const isDrop = this.setForm.controls.isDropSet.value;

    let classes = '';

    if (isWarmup) {
      classes = 'pill-warmup';
    } else if (isDrop) {
      classes = 'pill-drop';
    } else {
      classes = 'pill-default';
    }

    if (this.hasDropAfter) {
      classes += ' has-drop-after';
    }

    if (this.isClickable) {
      classes += ' hover:opacity-80 transition-opacity';
    }

    if (this.isSelected) {
      classes += ' ring-offset-2';
    }

    return classes;
  }
}
