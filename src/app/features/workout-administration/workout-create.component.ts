import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { ExerciseInstanceFormComponent } from './components/exercise-instance-form/exercise-instance-form.component';
import { LoaderComponent } from '../../shared/components/loader.component';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ExerciseTypesService } from '../../shared/services/exercise-types.service';
import { WorkoutsService } from '../../shared/services/workouts.service';
import { ExerciseType } from '../../shared/models/exercise-type.model';
import { Workout } from '../../shared/models/workout.model';
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
    LoaderComponent,
  ],
  templateUrl: './workout-create.component.html',
  styleUrl: './workout-create.component.scss',
})
export class WorkoutCreateComponent implements OnInit, CanComponentDeactivate {
  exerciseTypes: ExerciseType[] = [];
  isLoading = false;
  isApiLoading = signal(false);
  workoutForm = new WorkoutForm();
  showExerciseSelect = false;
  expandedPanelIndex: number | null = null;
  isEditMode = false;

  constructor(
    private router: Router,
    private exerciseTypesService: ExerciseTypesService,
    private workoutsService: WorkoutsService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.isEditMode = !!this.workoutForm.value.id;
    this.loadExerciseTypes();
    this.loadTodaysWorkouts();
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
  }

  onExerciseTypeSelected(exerciseType: ExerciseType): void {
    if (exerciseType) {
      this.workoutForm.addExercise();

      // Get the newly added exercise form and set the exercise type
      const newExerciseIndex = this.workoutForm.exercisesArray.length - 1;
      const newExerciseForm = this.workoutForm.exercisesArray.at(newExerciseIndex);
      newExerciseForm.patchValue({
        exerciseType: exerciseType,
      });

      // Set the newly added exercise as expanded
      this.expandedPanelIndex = newExerciseIndex;

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

  private loadTodaysWorkouts(): void {
    this.isApiLoading.set(true);
    this.workoutsService.getTodaysWorkout().subscribe({
      next: (todaysWorkout: Workout | null) => {
        if (todaysWorkout) {
          // Create a new form with the existing workout data but clear the ID to make it a new workout
          const workoutToClone: Workout = {
            ...todaysWorkout,
            id: 0, // Clear ID so it creates a new workout
            dateCreated: new Date().toISOString(), // Set to current time
          };
          this.workoutForm = new WorkoutForm(workoutToClone);
          this.isEditMode = true;
          this.isApiLoading.set(false);
        } else {
          this.isEditMode = false;
          this.isApiLoading.set(false);
        }
      },
      error: (error) => {
        console.error("Failed to load today's workout:", error);
        this.isEditMode = !!this.workoutForm.value.id;
        this.isApiLoading.set(false);
        // Continue with empty form if fetching fails
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
    return !this.workoutForm.dirty;
  }

  saveWorkout(): void {
    if (!this.workoutForm.valid) {
      return;
    }

    this.isApiLoading.set(true);
    const workoutData = this.workoutForm.getSubmitValue();
    const workoutId = workoutData.id;

    // Choose create or update based on whether ID exists
    const saveOperation = workoutId
      ? this.workoutsService.updateWorkout(workoutId, workoutData)
      : this.workoutsService.createWorkout(workoutData);

    saveOperation.pipe(finalize(() => this.isApiLoading.set(false))).subscribe({
      next: (savedWorkout) => {
        // Mark form as pristine since it's been saved
        this.workoutForm.markAsPristine();

        // Navigate to dashboard or workout details
        this.router.navigate(['/dashboard']);
      },
    });
  }
}
