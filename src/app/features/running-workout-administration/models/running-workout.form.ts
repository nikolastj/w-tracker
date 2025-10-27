import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  RunningWorkout,
  CreateRunningWorkout,
  RunningWorkoutType,
} from '../../../shared/models/running-workout.model';

type RunningWorkoutFormControls = {
  id: FormControl<number | null>;
  dateCreated: FormControl<Date | null>;
  runDuration: FormControl<number | null>;
  runDistance: FormControl<number | null>;
  runWorkoutType: FormControl<RunningWorkoutType | null>;
  comment: FormControl<string | null>;
};

export class RunningWorkoutForm extends FormGroup<RunningWorkoutFormControls> {
  constructor(workout?: RunningWorkout) {
    super({
      id: new FormControl<number | null>(workout?.id || null),
      dateCreated: new FormControl<Date | null>(
        workout?.dateCreated ? new Date(workout.dateCreated) : new Date(),
        Validators.required,
      ),
      runDuration: new FormControl<number | null>(workout?.runDuration || null, [
        Validators.required,
        Validators.min(1),
      ]),
      runDistance: new FormControl<number | null>(workout?.runDistance || null, [
        Validators.min(0),
      ]),
      runWorkoutType: new FormControl<RunningWorkoutType | null>(
        workout?.runWorkoutType || null,
        Validators.required,
      ),
      comment: new FormControl<string | null>(workout?.comment || ''),
    });
  }

  getSubmitValue(): CreateRunningWorkout {
    const formValue = this.value;
    return {
      id: formValue.id || undefined,
      dateCreated: formValue.dateCreated?.toISOString() || new Date().toISOString(),
      runDuration: formValue.runDuration!,
      runDistance: formValue.runDistance || null,
      runWorkoutType: formValue.runWorkoutType!,
      comment: formValue.comment || null,
    };
  }
}
