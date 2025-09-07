import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
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
export class WorkoutCreateComponent implements OnInit, CanComponentDeactivate {
  exerciseTypes: ExerciseType[] = [];
  isLoading = false;
  workoutForm = new WorkoutForm(test);
  showExerciseSelect = false;
  expandedPanelIndex: number | null = null;

  constructor(
    private router: Router,
    private exerciseTypesService: ExerciseTypesService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.loadExerciseTypes();
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
    this.workoutForm.markAsDirty();
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

export const test = {
  id: 29,
  dateCreated: '2025-07-09T17:13:22.365Z',
  exercises: [
    {
      id: 184,
      order: 1,
      sets: [
        {
          id: 643,
          order: 3,
          reps: 10,
          weight: 20,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 642,
          order: 2,
          reps: 10,
          weight: 20,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 641,
          order: 1,
          reps: 10,
          weight: 20,
          isWarmupSet: false,
          isDropSet: false,
        },
      ],
      exerciseType: {
        id: 41,
        name: 'Inclined Chest Press',
        description:
          'A variation of the Dumbbell Chest Press performed at an incline, emphasizing the upper chest.',
        requisiteUsed: 'Dumbbells',
        usesNegativeWeight: false,
        isCore: false,
      },
      comment: null,
      energyLevel: null,
    },
    {
      id: 183,
      order: 2,
      sets: [
        {
          id: 640,
          order: 3,
          reps: 10,
          weight: 132,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 639,
          order: 2,
          reps: 10,
          weight: 132,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 638,
          order: 1,
          reps: 10,
          weight: 132,
          isWarmupSet: false,
          isDropSet: false,
        },
      ],
      exerciseType: {
        id: 5,
        name: 'Adductor',
        description:
          'Targets the hip adductors using a machine to isolate and strengthen the inner thighs.',
        requisiteUsed: 'Machine',
        usesNegativeWeight: false,
        isCore: false,
      },
      comment: null,
      energyLevel: null,
    },
    {
      id: 182,
      order: 3,
      sets: [
        {
          id: 637,
          order: 6,
          reps: 5,
          weight: 20,
          isWarmupSet: false,
          isDropSet: true,
        },
        {
          id: 636,
          order: 5,
          reps: 4,
          weight: 1,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 635,
          order: 4,
          reps: 6,
          weight: 20,
          isWarmupSet: false,
          isDropSet: true,
        },
        {
          id: 634,
          order: 3,
          reps: 6,
          weight: 1,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 633,
          order: 2,
          reps: 10,
          weight: 1,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 632,
          order: 1,
          reps: 10,
          weight: 1,
          isWarmupSet: false,
          isDropSet: false,
        },
      ],
      exerciseType: {
        id: 31,
        name: 'Pull-Up',
        description:
          'A vertical pulling exercise targeting the lats, assisted by a machine with negative weight.',
        requisiteUsed: 'Machine',
        usesNegativeWeight: true,
        isCore: false,
      },
      comment: null,
      energyLevel: null,
    },
    {
      id: 181,
      order: 4,
      sets: [
        {
          id: 631,
          order: 3,
          reps: 15,
          weight: 1,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 630,
          order: 2,
          reps: 15,
          weight: 1,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 629,
          order: 1,
          reps: 15,
          weight: 1,
          isWarmupSet: false,
          isDropSet: false,
        },
      ],
      exerciseType: {
        id: 51,
        name: 'Roman Chair Leg Raise',
        description:
          'A core-focused exercise performed on a Roman chair to strengthen the lower abs and hip flexors.',
        requisiteUsed: 'Machine',
        usesNegativeWeight: false,
        isCore: true,
      },
      comment: null,
      energyLevel: null,
    },
    {
      id: 180,
      order: 5,
      sets: [
        {
          id: 628,
          order: 3,
          reps: 10,
          weight: 132,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 627,
          order: 2,
          reps: 10,
          weight: 132,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 626,
          order: 1,
          reps: 10,
          weight: 132,
          isWarmupSet: false,
          isDropSet: false,
        },
      ],
      exerciseType: {
        id: 4,
        name: 'Abductor',
        description:
          'Targets the hip abductors using a machine to isolate and strengthen the outer thighs.',
        requisiteUsed: 'Machine',
        usesNegativeWeight: false,
        isCore: false,
      },
      comment: null,
      energyLevel: null,
    },
    {
      id: 179,
      order: 6,
      sets: [
        {
          id: 625,
          order: 5,
          reps: 5,
          weight: 70,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 624,
          order: 4,
          reps: 6,
          weight: 70,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 623,
          order: 3,
          reps: 10,
          weight: 70,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 622,
          order: 2,
          reps: 10,
          weight: 70,
          isWarmupSet: false,
          isDropSet: false,
        },
        {
          id: 621,
          order: 1,
          reps: 10,
          weight: 50,
          isWarmupSet: false,
          isDropSet: false,
        },
      ],
      exerciseType: {
        id: 36,
        name: 'Bench Press',
        description: 'A compound pressing movement targeting the chest, performed with a barbell.',
        requisiteUsed: 'Barbell',
        usesNegativeWeight: false,
        isCore: false,
      },
      comment: null,
      energyLevel: null,
    },
  ],
  comment: null,
  energyLevel: null,
};
