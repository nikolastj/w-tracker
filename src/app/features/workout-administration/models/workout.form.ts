import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { Workout, CreateUpdateWorkout } from '../../../shared/models/workout.model';
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
    super({
      id: new FormControl<number | null>(workout?.id || null),
      dateCreated: new FormControl<string | null>(
        workout?.dateCreated || new Date().toISOString(),
        Validators.required,
      ),
      exercises: new FormArray<ExerciseInstanceForm>(
        workout?.exercises
          ?.sort((a, b) => a.order - b.order)
          .map((exercise) => new ExerciseInstanceForm(exercise)) || [],
        [WorkoutForm.atLeastOneExerciseValidator],
      ),
      comment: new FormControl<string | null>(workout?.comment || ''),
      energyLevel: new FormControl<number | null>(workout?.energyLevel || null, [
        Validators.min(1),
        Validators.max(10),
      ]),
    });
  }

  get exercisesArray(): FormArray<ExerciseInstanceForm> {
    return this.controls.exercises;
  }

  addExercise(): void {
    const currentExercises = this.exercisesArray.value;
    const nextOrder =
      currentExercises.length > 0 ? Math.max(...currentExercises.map((e) => e.order || 0)) + 1 : 1;

    const newExercise = new ExerciseInstanceForm();
    newExercise.patchValue({ order: nextOrder });
    this.exercisesArray.push(newExercise);
    this.markAsDirty();
  }

  removeExercise(index: number): void {
    this.exercisesArray.removeAt(index);
    this.reorderExercises();
    this.markAsDirty();
  }

  private reorderExercises(): void {
    this.exercisesArray.controls.forEach((exerciseForm, index) => {
      exerciseForm.patchValue({ order: index + 1 });
    });
  }

  getSubmitValue(): CreateUpdateWorkout {
    const formValue = this.value;
    return {
      id: formValue.id || undefined,
      dateCreated: formValue.dateCreated || new Date().toISOString(),
      exercises: this.exercisesArray.controls.map((exerciseForm) => exerciseForm.getSubmitValue()),
      comment: formValue.comment || null,
      energyLevel: formValue.energyLevel || null,
    };
  }

  static atLeastOneExerciseValidator: ValidatorFn = (control: AbstractControl) => {
    const formArray = control as FormArray;
    return formArray.length > 0 ? null : { atLeastOneExercise: true };
  };
}
