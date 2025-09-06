import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExerciseSet, CreateExerciseSet } from '../../../shared/models/workout.model';

type ExerciseSetFormControls = {
  id: FormControl<number | null>;
  order: FormControl<number | null>;
  reps: FormControl<number | null>;
  weight: FormControl<number | null>;
  isWarmupSet: FormControl<boolean | null>;
  isDropSet: FormControl<boolean | null>;
};

export class ExerciseSetForm extends FormGroup<ExerciseSetFormControls> {
  constructor(exerciseSet?: ExerciseSet) {
    super({
      id: new FormControl<number | null>(exerciseSet?.id || null),
      order: new FormControl<number | null>(exerciseSet?.order || 1, [
        Validators.required,
        Validators.min(1),
      ]),
      reps: new FormControl<number | null>(exerciseSet?.reps || null, [
        Validators.required,
        Validators.min(1),
      ]),
      weight: new FormControl<number | null>(exerciseSet?.weight || 0, [
        Validators.required,
        Validators.min(0),
      ]),
      isWarmupSet: new FormControl<boolean | null>(exerciseSet?.isWarmupSet || false),
      isDropSet: new FormControl<boolean | null>(exerciseSet?.isDropSet || false),
    });
  }

  getSubmitValue(): CreateExerciseSet {
    const formValue = this.value;
    return {
      id: formValue.id || undefined,
      order: formValue.order || 1,
      reps: formValue.reps || 0,
      weight: formValue.weight || 0,
      isWarmupSet: formValue.isWarmupSet || false,
      isDropSet: formValue.isDropSet || false,
    };
  }
}
