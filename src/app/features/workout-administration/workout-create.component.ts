import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NgSelectModule, NgSelectComponent } from '@ng-select/ng-select';
import { ExerciseInstanceFormComponent } from './components/exercise-instance-form.component';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ExerciseTypesService } from '../../shared/services/exercise-types.service';
import { ExerciseType } from '../../shared/models/exercise-type.model';
import { WorkoutForm } from './models/workout.form';
import { ExerciseInstanceForm } from './models/exercise-instance.form';
import { CanComponentDeactivate } from '../../core';
import {
  ConfirmActionDialogComponent,
  ConfirmActionDialogData,
} from '../../shared/components/confirm-action-dialog.component';

@Component({
  selector: 'app-workout-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    NgSelectModule,
    ExerciseInstanceFormComponent,
  ],
  templateUrl: './workout-create.component.html',
  styleUrl: './workout-create.component.scss',
})
export class WorkoutCreateComponent implements OnInit, AfterViewChecked, CanComponentDeactivate {
  @ViewChild('exerciseTypeSelect') exerciseTypeSelect!: NgSelectComponent;

  exerciseTypes: ExerciseType[] = [];
  isLoading = false;
  workoutForm = new WorkoutForm();
  showExerciseSelect = false;
  expandedPanelIndex: number | null = null;
  private shouldFocusSelect = false;

  constructor(
    private router: Router,
    private exerciseTypesService: ExerciseTypesService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.loadExerciseTypes();
  }

  ngAfterViewChecked(): void {
    if (this.shouldFocusSelect && this.exerciseTypeSelect && this.showExerciseSelect) {
      // Focus and open the dropdown
      this.exerciseTypeSelect.focus();
      this.exerciseTypeSelect.open();
      this.shouldFocusSelect = false;
    }
  }

  /**
   * Returns exercise types that are NOT already selected in the workout
   */
  get availableExerciseTypes(): ExerciseType[] {
    const selectedExerciseTypeIds = this.workoutForm.exercisesArray.controls
      .map((exercise) => exercise.controls.exerciseType.value?.id)
      .filter((id) => id !== null && id !== undefined);

    return this.exerciseTypes.filter(
      (exerciseType) => !selectedExerciseTypeIds.includes(exerciseType.id),
    );
  }

  get areAllExercisesValid(): boolean {
    return this.workoutForm.exercisesArray.controls.every((exerciseForm) => exerciseForm.valid);
  }

  showAddExerciseDropdown(): void {
    this.showExerciseSelect = true;
    this.shouldFocusSelect = true;
  }

  onExerciseTypeSelected(exerciseType: ExerciseType): void {
    this.workoutForm.markAsDirty();
    if (exerciseType) {
      const newExerciseForm = new ExerciseInstanceForm();
      newExerciseForm.patchValue({
        exerciseType: exerciseType,
      });

      this.workoutForm.exercisesArray.push(newExerciseForm);

      // Set the newly added exercise as expanded
      this.expandedPanelIndex = this.workoutForm.exercisesArray.length - 1;

      this.showExerciseSelect = false;
    }
  }

  cancelExerciseSelection(): void {
    this.showExerciseSelect = false;
  }

  onPanelExpandedChange(index: number, expanded: boolean): void {
    if (expanded) {
      this.expandedPanelIndex = index;
    } else if (this.expandedPanelIndex === index) {
      this.expandedPanelIndex = null;
    }
  }

  removeExercise(index: number): void {
    this.workoutForm.removeExercise(index);

    // Update expanded panel index after removal
    if (this.expandedPanelIndex !== null) {
      if (this.expandedPanelIndex === index) {
        // If the expanded panel was removed, clear the expanded state
        this.expandedPanelIndex = null;
      } else if (this.expandedPanelIndex > index) {
        // If the expanded panel is after the removed one, decrement the index
        this.expandedPanelIndex--;
      }
    }
  }

  private loadExerciseTypes(): void {
    this.isLoading = true;
    this.exerciseTypesService
      .getExerciseTypes()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (exerciseTypes) => {
          this.exerciseTypes = exerciseTypes;
        },
      });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  discardWorkout(): void {
    if (!this.workoutForm.dirty) {
      this.router.navigate(['/dashboard']);
      return;
    }

    const dialogRef = this.dialog.open(ConfirmActionDialogComponent, {
      width: '450px',
      maxWidth: '90vw',
      disableClose: true,
    });

    dialogRef.componentInstance.data = new ConfirmActionDialogData({
      title: 'Discard Workout',
      message: 'Are you sure you want to discard this workout? All your progress will be lost.',
      confirmButtonColor: 'warn',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // User confirmed - navigate to dashboard
        this.router.navigate(['/dashboard']);
      }
      // If result is false or undefined, user cancelled - do nothing
    });
  }

  hasExerciseVariation(exerciseInstanceControl: ExerciseInstanceForm): boolean {
    const exerciseTypeSimple = exerciseInstanceControl.controls.exerciseType.value;

    if (!exerciseTypeSimple?.id) {
      return false;
    }

    const fullExerciseType = this.exerciseTypes.find((et) => et.id === exerciseTypeSimple.id);

    return !!fullExerciseType?.variationOfExercise;
  }

  canDeactivate(): boolean {
    if (!this.workoutForm.dirty) {
      return true;
    }
    return false;
  }
}
