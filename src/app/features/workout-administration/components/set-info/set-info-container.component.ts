import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray } from '@angular/forms';
import { ExerciseSetForm } from '../../models/exercise-set.form';
import { SetInfoComponent } from './set-info.component';

@Component({
  selector: 'app-set-info-container',
  standalone: true,
  imports: [CommonModule, SetInfoComponent],
  template: `
    <div class="flex flex-col gap-1">
      <h3 class="m-0 text-sm font-medium">Sets ({{ setsArray.controls.length }})</h3>
      <div class="flex flex-wrap gap-2">
        @for (setForm of setsArray.controls; track $index) {
          <app-set-info
            [setForm]="setForm"
            [hasDropAfter]="hasDropSetAfter($index)"
            [isClickable]="isEditMode"
            [isSelected]="selectedSetIndex === $index"
            (click)="onSetClick($index)"
          />
        }
      </div>
    </div>
  `,
  styleUrls: ['./set-info.scss'],
})
export class SetInfoContainerComponent {
  @Input({ required: true }) setsArray!: FormArray<ExerciseSetForm>;
  @Input() isEditMode = false;
  @Input() selectedSetIndex: number | null = null;
  @Output() setSelected = new EventEmitter<number>();

  hasDropSetAfter(index: number): boolean {
    const nextIndex = index + 1;
    if (nextIndex >= this.setsArray.controls.length) {
      return false;
    }

    const nextSet = this.setsArray.controls[nextIndex];
    return nextSet.controls.isDropSet.value === true;
  }

  onSetClick(index: number): void {
    if (this.isEditMode) {
      this.setSelected.emit(index);
    }
  }
}
