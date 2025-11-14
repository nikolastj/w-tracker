import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  StretchWorkout,
  CreateStretchWorkout,
  StretchWorkoutIntensity,
} from '../../../shared/models/stretch-workout.model';

type StretchWorkoutFormControls = {
  id: FormControl<number | null>;
  dateCreated: FormControl<Date | null>;
  duration: FormControl<number | null>;
  intensity: FormControl<StretchWorkoutIntensity | null>;
  comment: FormControl<string | null>;
};

export class StretchWorkoutForm extends FormGroup<StretchWorkoutFormControls> {
  constructor(workout?: StretchWorkout) {
    super({
      id: new FormControl<number | null>(workout?.id || null),
      dateCreated: new FormControl<Date | null>(
        workout?.dateCreated ? new Date(workout.dateCreated) : new Date(),
        Validators.required,
      ),
      duration: new FormControl<number | null>(workout?.duration || null, [
        Validators.required,
        Validators.min(1),
      ]),
      intensity: new FormControl<StretchWorkoutIntensity | null>(
        workout?.intensity || null,
        Validators.required,
      ),
      comment: new FormControl<string | null>(workout?.comment || ''),
    });
  }

  getSubmitValue(): CreateStretchWorkout {
    const formValue = this.value;
    return {
      id: formValue.id || undefined,
      dateCreated: formValue.dateCreated?.toISOString() || new Date().toISOString(),
      duration: formValue.duration!,
      intensity: formValue.intensity!,
      comment: formValue.comment || null,
    };
  }
}
