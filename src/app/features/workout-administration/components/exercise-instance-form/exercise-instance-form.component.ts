import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { ExerciseInstanceForm } from '../../models/exercise-instance.form';
import { ExerciseSetForm } from '../../models/exercise-set.form';
import { ExerciseSetFormComponent } from '../exercise-set-form/exercise-set-form.component';
import { SetInfoContainerComponent } from '../set-info/set-info-container.component';

@Component({
  selector: 'app-exercise-instance-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSliderModule,
    MatCardModule,
    ExerciseSetFormComponent,
    SetInfoContainerComponent,
  ],
  templateUrl: './exercise-instance-form.component.html',
})
export class ExerciseInstanceFormComponent implements OnInit, OnChanges {
  @Input({ required: true }) exerciseForm!: ExerciseInstanceForm;
  @Output() removeExercise = new EventEmitter<void>();

  newSetForm = new ExerciseSetForm();
  isEditMode = false;
  selectedSetIndex: number | null = null;

  ngOnInit(): void {
    this.initializeNewSetForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['exerciseForm']) {
      this.initializeNewSetForm();
    }
  }

  /**
   * Initialize the new set form with values from the last non-drop set
   */
  private initializeNewSetForm(): void {
    const lastNonDropSet = this.getLastNonDropSet();
    if (lastNonDropSet) {
      this.newSetForm = new ExerciseSetForm();
      this.newSetForm.patchValue({
        reps: lastNonDropSet.reps,
        weight: lastNonDropSet.weight,
      });
    } else {
      this.newSetForm = new ExerciseSetForm();
    }
  }

  /**
   * Get the last set that is not a drop set
   */
  private getLastNonDropSet() {
    const sets = this.exerciseForm.setsArray.controls;
    if (sets.length === 0) {
      return null;
    }

    // Go through sets in reverse order to find the last non-drop set
    for (let i = sets.length - 1; i >= 0; i--) {
      const setForm = sets[i];
      const isDropSet = setForm.controls.isDropSet.value;

      if (!isDropSet) {
        return {
          reps: setForm.controls.reps.value,
          weight: setForm.controls.weight.value,
        };
      }
    }

    return null;
  }

  addSet(formToAdd: ExerciseSetForm): void {
    if (formToAdd.valid) {
      if (this.isEditMode && this.selectedSetIndex !== null) {
        // Update existing set
        this.updateSelectedSet(formToAdd);
      } else {
        // Add new set
        this.addNewSet(formToAdd);
      }
    }
  }

  /**
   * Add a new set to the exercise
   */
  private addNewSet(formToAdd: ExerciseSetForm): void {
    // Get the form data
    const newSetData = formToAdd.getSubmitValue();

    // Calculate the next order
    const currentSets = this.exerciseForm.setsArray.value;
    const nextOrder =
      currentSets.length > 0 ? Math.max(...currentSets.map((s) => s.order || 0)) + 1 : 1;

    const setForm = new ExerciseSetForm();
    setForm.patchValue({
      ...newSetData,
      order: nextOrder,
    });

    this.exerciseForm.setsArray.push(setForm);

    // Mark the exercise form as dirty
    this.exerciseForm.markAsDirty();

    // Re-initialize the new set form with the latest values
    this.initializeNewSetForm();
  }

  /**
   * Update the currently selected set
   */
  private updateSelectedSet(formToAdd: ExerciseSetForm): void {
    if (this.selectedSetIndex !== null) {
      const selectedSetForm = this.exerciseForm.setsArray.at(this.selectedSetIndex);
      if (selectedSetForm) {
        const updateData = formToAdd.getSubmitValue();
        selectedSetForm.patchValue({
          reps: updateData.reps,
          weight: updateData.weight,
          isWarmupSet: updateData.isWarmupSet,
          isDropSet: updateData.isDropSet,
        });

        // Mark the exercise form as dirty
        this.exerciseForm.markAsDirty();

        // Exit edit mode after successful update
        this.exitEditMode();
      }
    }
  }

  /**
   * Get the text for the remove button based on edit mode and sets
   */
  get removeButtonText(): string {
    if (this.exerciseForm.setsArray.length === 0) {
      return 'Remove Exercise';
    }
    return this.isEditMode ? 'Remove Current Set' : 'Remove Last Set';
  }

  /**
   * Get the icon for the remove button based on edit mode and sets
   */
  get removeButtonIcon(): string {
    if (this.exerciseForm.setsArray.length === 0) {
      return 'delete';
    }
    return this.isEditMode ? 'delete_outline' : 'remove_circle_outline';
  }

  /**
   * Get the text for the edit button based on edit mode
   */
  get editButtonText(): string {
    return this.isEditMode ? 'Unselect' : 'Edit Sets';
  }

  /**
   * Get the icon for the edit button based on edit mode
   */
  get editButtonIcon(): string {
    return this.isEditMode ? 'close' : 'edit';
  }

  /**
   * Check if the remove button should be disabled
   */
  get isRemoveButtonDisabled(): boolean {
    // Disable when in edit mode but no set is selected
    return (
      this.isEditMode && this.selectedSetIndex === null && this.exerciseForm.setsArray.length > 0
    );
  }

  /**
   * Handle remove button click - behavior depends on edit mode and sets
   */
  onRemoveAction(): void {
    if (this.exerciseForm.setsArray.length === 0) {
      this.onRemoveExercise();
    } else if (this.isEditMode && this.selectedSetIndex !== null) {
      this.removeCurrentSet();
    } else {
      this.removeLastSet();
    }
  }

  /**
   * Remove the last set from the exercise
   */
  private removeLastSet(): void {
    const lastIndex = this.exerciseForm.setsArray.length - 1;
    if (lastIndex >= 0) {
      this.exerciseForm.removeSet(lastIndex);
      // Re-initialize the new set form with updated values
      this.initializeNewSetForm();
    }
  }

  /**
   * Remove the currently selected set (in edit mode)
   */
  private removeCurrentSet(): void {
    if (this.selectedSetIndex !== null && this.selectedSetIndex >= 0) {
      this.exerciseForm.removeSet(this.selectedSetIndex);
      this.exitEditMode();
    }
  }

  /**
   * Handle edit/deselect button click
   */
  onEditAction(): void {
    if (this.isEditMode) {
      this.exitEditMode();
    } else {
      this.enterEditMode();
    }
  }

  /**
   * Enter edit mode
   */
  private enterEditMode(): void {
    this.isEditMode = true;
  }

  /**
   * Exit edit mode without saving
   */
  private exitEditMode(): void {
    this.isEditMode = false;
    this.selectedSetIndex = null;
    this.initializeNewSetForm();
  }

  /**
   * Handle set selection from set info container
   */
  onSetSelected(index: number): void {
    if (this.isEditMode) {
      this.selectedSetIndex = index;
      this.loadSetForEditing(index);
    }
  }

  /**
   * Load selected set data into the form for editing
   */
  private loadSetForEditing(index: number): void {
    const setForm = this.exerciseForm.setsArray.at(index);
    if (setForm) {
      this.newSetForm = new ExerciseSetForm();
      this.newSetForm.patchValue({
        reps: setForm.controls.reps.value,
        weight: setForm.controls.weight.value,
        isWarmupSet: setForm.controls.isWarmupSet.value,
        isDropSet: setForm.controls.isDropSet.value,
      });
    }
  }

  /**
   * Emit event to remove the entire exercise
   */
  private onRemoveExercise(): void {
    this.removeExercise.emit();
  }
}
