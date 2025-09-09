import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import {
  ExerciseInstance,
  ExerciseTypeSimple,
  CreateExerciseInstance,
  ExerciseInstancePrevious,
} from '../../../shared/models/workout.model';
import { ExerciseSetForm } from './exercise-set.form';

type ExerciseInstanceFormControls = {
  id: FormControl<number | null>;
  order: FormControl<number | null>;
  sets: FormArray<ExerciseSetForm>;
  exerciseType: FormControl<ExerciseTypeSimple | null>;
  comment: FormControl<string | null>;
  energyLevel: FormControl<number | null>;
};

export class ExerciseInstanceForm extends FormGroup<ExerciseInstanceFormControls> {
  constructor(exerciseInstance?: ExerciseInstance) {
    super({
      id: new FormControl<number | null>(exerciseInstance?.id || null),
      order: new FormControl<number | null>(exerciseInstance?.order || null),
      sets: new FormArray<ExerciseSetForm>(
        exerciseInstance?.sets
          ?.sort((a, b) => a.order - b.order)
          .map((set) => new ExerciseSetForm(set)) || [],
        [ExerciseInstanceForm.atLeastOneSetValidator],
      ),
      exerciseType: new FormControl<ExerciseTypeSimple | null>(
        exerciseInstance?.exerciseType || null,
        Validators.required,
      ),
      comment: new FormControl<string | null>(exerciseInstance?.comment || ''),
      energyLevel: new FormControl<number | null>(exerciseInstance?.energyLevel || null, [
        Validators.min(1),
        Validators.max(10),
      ]),
    });
  }

  previousExercises: ExerciseInstancePrevious[] = [];

  get typeId(): number | null {
    return this.controls.exerciseType.value?.id || null;
  }

  get setsArray(): FormArray<ExerciseSetForm> {
    return this.controls.sets;
  }

  addSet(): void {
    const currentSets = this.setsArray.value;
    const nextOrder =
      currentSets.length > 0 ? Math.max(...currentSets.map((s) => s.order || 0)) + 1 : 1;

    const newSet = new ExerciseSetForm();
    newSet.patchValue({ order: nextOrder });
    this.setsArray.push(newSet);
    this.markAsDirty();
  }

  removeSet(index: number): void {
    this.setsArray.removeAt(index);
    this.reorderSets();
    this.markAsDirty();
  }

  private reorderSets(): void {
    this.setsArray.controls.forEach((setForm, index) => {
      setForm.patchValue({ order: index + 1 });
    });
  }

  getSubmitValue(): CreateExerciseInstance {
    const formValue = this.value;
    return {
      id: formValue.id || undefined,
      order: formValue.order || 1,
      sets: this.setsArray.controls.map((setForm) => setForm.getSubmitValue()),
      exerciseType: formValue.exerciseType!,
      comment: formValue.comment || null,
      energyLevel: formValue.energyLevel || null,
    };
  }

  static atLeastOneSetValidator: ValidatorFn = (control: AbstractControl) => {
    const formArray = control as FormArray;
    return formArray.length > 0 ? null : { atLeastOneSet: true };
  };
}
