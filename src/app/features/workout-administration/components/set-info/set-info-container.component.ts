import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray } from '@angular/forms';
import { ExerciseSetForm } from '../../models/exercise-set.form';
import { SetInfoComponent } from './set-info.component';

@Component({
  selector: 'app-set-info-container',
  standalone: true,
  imports: [CommonModule, SetInfoComponent],
  template: `
    <div class="flex flex-col gap-2">
      <h3 class="text-sm font-medium">Sets ({{ setsArray.controls.length }})</h3>
      <div class="flex flex-wrap gap-2">
        @for (setForm of setsArray.controls; track $index) {
          <app-set-info [setForm]="setForm" />
        }
      </div>
    </div>
  `,
  styleUrls: ['./set-info.scss'],
})
export class SetInfoContainerComponent {
  @Input({ required: true }) setsArray!: FormArray<ExerciseSetForm>;
}
