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
      @if (!isSmallView) {
        <h3 class="m-0 text-sm font-medium">Sets ({{ setsArray.controls.length }})</h3>
      }
      <div class="set-info-container flex flex-wrap gap-1" [class.small-layout]="isSmallView">
        @for (setForm of setsArray.controls; track $index) {
          <div class="flex gap-0.5">
            @if (!setForm.controls.isDropSet.value) {
              <app-set-info
                [setForm]="setForm"
                [hasDropAfter]="hasDropSetAfter($index)"
                [isClickable]="isEditMode"
                [isSelected]="selectedSetIndex === $index"
                [isSmallView]="isSmallView"
                (click)="onSetClick($index)"
              />
              @if (hasDropSetAfter($index)) {
                @for (dropSetForm of getFollowingDropSets($index); track dropSetForm.index) {
                  <app-set-info
                    [setForm]="dropSetForm.form"
                    [hasDropAfter]="hasDropSetAfter(dropSetForm.index)"
                    [isClickable]="isEditMode"
                    [isSelected]="selectedSetIndex === dropSetForm.index"
                    [isSmallView]="isSmallView"
                    (click)="onSetClick(dropSetForm.index)"
                  />
                }
              }
            }
          </div>
        }
      </div>
    </div>
  `,
  styleUrls: ['./set-info.scss'],
})
export class SetInfoContainerComponent {
  @Input({ required: true }) setsArray!: FormArray<ExerciseSetForm>;
  @Input() isEditMode = false;
  @Input() isSmallView = false;
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

  getFollowingDropSets(index: number): Array<{ index: number; form: ExerciseSetForm }> {
    const result: Array<{ index: number; form: ExerciseSetForm }> = [];

    for (let i = index + 1; i < this.setsArray.controls.length; i++) {
      const form = this.setsArray.controls[i];
      if (form.controls.isDropSet.value) {
        result.push({ index: i, form });
      } else {
        break; // Stop at first non-drop set
      }
    }

    return result;
  }

  onSetClick(index: number): void {
    if (this.isEditMode) {
      this.setSelected.emit(index);
    }
  }
}
