import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ExerciseInstance,
  ExerciseTypeSimple,
  CreateExerciseInstance,
} from '../../../shared/models/workout.model';
import { ExerciseSetForm } from './exercise-set.form';

type ExerciseInstanceFormControls = {
  id: FormControl<number | null>;
  sets: FormArray<ExerciseSetForm>;
  exerciseType: FormControl<ExerciseTypeSimple | null>;
  comment: FormControl<string | null>;
  energyLevel: FormControl<number | null>;
};

export class ExerciseInstanceForm extends FormGroup<ExerciseInstanceFormControls> {
  constructor(exerciseInstance?: ExerciseInstance) {
    super({
      id: new FormControl<number | null>(exerciseInstance?.id || null),
      sets: new FormArray<ExerciseSetForm>(
        exerciseInstance?.sets?.map((set) => new ExerciseSetForm(set)) || [],
        [Validators.minLength(1)],
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
  }

  removeSet(index: number): void {
    if (this.setsArray.length > 1) {
      this.setsArray.removeAt(index);
      this.reorderSets();
    }
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
      sets: this.setsArray.controls.map((setForm) => setForm.getSubmitValue()),
      exerciseType: formValue.exerciseType!,
      comment: formValue.comment || null,
      energyLevel: formValue.energyLevel || null,
    };
  }
}
