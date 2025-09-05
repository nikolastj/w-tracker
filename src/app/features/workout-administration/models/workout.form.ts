import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Workout, CreateWorkout } from '../../../shared/models/workout.model';
import { ExerciseInstanceForm } from './exercise-instance.form';

type WorkoutFormControls = {
  id: FormControl<number | null>;
  dateCreated: FormControl<string | null>;
  exercises: FormArray<ExerciseInstanceForm>;
  comment: FormControl<string | null>;
  energyLevel: FormControl<number | null>;
};

export class WorkoutForm extends FormGroup<WorkoutFormControls> {
  constructor(workout?: Workout) {
    super(
      {
        id: new FormControl<number | null>(workout?.id || null),
        dateCreated: new FormControl<string | null>(
          workout?.dateCreated || new Date().toISOString(),
          Validators.required,
        ),
        exercises: new FormArray<ExerciseInstanceForm>(
          workout?.exercises?.map((exercise) => new ExerciseInstanceForm(exercise)) || [],
        ),
        comment: new FormControl<string | null>(workout?.comment || ''),
        energyLevel: new FormControl<number | null>(workout?.energyLevel || null, [
          Validators.min(1),
          Validators.max(10),
        ]),
      },
      { validators: WorkoutForm.atLeastOneExerciseValidator },
    );
  }

  get exercisesArray(): FormArray<ExerciseInstanceForm> {
    return this.controls.exercises;
  }

  addExercise(): void {
    this.exercisesArray.push(new ExerciseInstanceForm());
  }

  removeExercise(index: number): void {
    if (this.exercisesArray.length > 1) {
      this.exercisesArray.removeAt(index);
    }
  }

  getSubmitValue(): CreateWorkout {
    const formValue = this.value;
    return {
      id: formValue.id || undefined,
      dateCreated: formValue.dateCreated || new Date().toISOString(),
      exercises: this.exercisesArray.controls.map((exerciseForm) => exerciseForm.getSubmitValue()),
      comment: formValue.comment || null,
      energyLevel: formValue.energyLevel || null,
    };
  }

  private static atLeastOneExerciseValidator: ValidatorFn = (control: AbstractControl) => {
    const form = control as WorkoutForm;
    const exercises = form.controls.exercises;

    if (!exercises || exercises.length === 0) {
      return { noExercises: true };
    }

    // Check if at least one exercise has a valid exercise type
    const hasValidExercise = exercises.controls.some((exerciseControl) => {
      const exerciseForm = exerciseControl as ExerciseInstanceForm;
      return exerciseForm.controls.exerciseType.value !== null;
    });

    return hasValidExercise ? null : { noValidExercises: true };
  };
}
