import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgSelectModule, NgSelectComponent } from '@ng-select/ng-select';
import { ExerciseInstanceFormComponent } from '../exercise-instance-form/exercise-instance-form.component';
import { LoaderComponent } from '../../../../shared/components/loader.component';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ExerciseTypesService } from '../../../../shared/services/exercise-types.service';
import { WorkoutsService } from '../../../../shared/services/workouts.service';
import { ExerciseType } from '../../../../shared/models/exercise-type.model';
import { ExerciseInstancePrevious, Workout } from '../../../../shared/models/workout.model';
import { WorkoutForm } from '../../models/workout.form';
import { ExerciseInstanceForm } from '../../models/exercise-instance.form';
import { CanComponentDeactivate, CanDeactivateResult } from '../../../../core';

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
    NgSelectModule,
    ExerciseInstanceFormComponent,
    LoaderComponent,
  ],
  templateUrl: './workout-create.component.html',
  styleUrl: './workout-create.component.scss',
})
export class WorkoutCreateComponent implements OnInit, CanComponentDeactivate {
  @ViewChild('exerciseSelect') exerciseSelect!: NgSelectComponent;

  exerciseTypes: ExerciseType[] = [];
  isLoading = false;
  isApiLoading = signal(false);
  workoutForm = new WorkoutForm();
  showExerciseSelect = false;
  expandedPanelIndex: number | null = null;
  isEditMode = false;
  previousExercisesMap = new Map<number, ExerciseInstancePrevious[]>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private exerciseTypesService: ExerciseTypesService,
    private workoutsService: WorkoutsService,
  ) {}

  ngOnInit(): void {
    this.loadExerciseTypes();

    const workoutId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!workoutId;

    if (workoutId) {
      this.loadWorkoutById(+workoutId);
    } else {
      this.loadTodaysWorkouts();
      this.workoutsService.readCachedLastMonthWorkouts().subscribe((workouts) => {
        // Populate the previousExercisesMap
        this.populatePreviousExercisesMap(workouts);
      });
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

  exerciseSearchFn = (term: string, item: ExerciseType): boolean => {
    if (!term) return true;

    const searchTerm = term.toLowerCase();
    const exerciseName = item.name.toLowerCase();
    const muscleGroup = item.primaryMuscleTargeted.group.toLowerCase();
    const requisiteUsed = item.requisiteUsed?.toLowerCase() || '';

    return (
      exerciseName.includes(searchTerm) ||
      muscleGroup.includes(searchTerm) ||
      requisiteUsed.includes(searchTerm)
    );
  };

  showAddExerciseDropdown(): void {
    this.showExerciseSelect = true;
    setTimeout(() => {
      if (this.exerciseSelect) {
        this.exerciseSelect.focus();
      }
    }, 0);
  }

  onExerciseTypeSelected(exerciseType: ExerciseType): void {
    if (exerciseType) {
      const newExercise = this.workoutForm.addExercise();
      newExercise.previousExercises = this.previousExercisesMap.get(exerciseType.id) || [];

      // Get the newly added exercise form and set the exercise type
      const newExerciseIndex = this.workoutForm.exercisesArray.length - 1;
      const newExerciseForm = this.workoutForm.exercisesArray.at(newExerciseIndex);
      newExerciseForm.patchValue({
        exerciseType: exerciseType,
      });

      // Bind previous exercise data to the new form instance
      if (this.previousExercisesMap.has(exerciseType.id)) {
        const previousExercises = this.previousExercisesMap.get(exerciseType.id)!;
        newExerciseForm.previousExercises = previousExercises;
      }

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
          this.workoutForm = new WorkoutForm(todaysWorkout);
          this.isEditMode = true;
        }
        this.isApiLoading.set(false);
      },
      error: (error) => {
        console.error("Failed to load today's workout:", error);
        this.isEditMode = !!this.workoutForm.value.id;
        this.isApiLoading.set(false);
      },
    });
  }

  private loadWorkoutById(id: number): void {
    this.isApiLoading.set(true);
    this.workoutsService.getWorkoutById(id).subscribe({
      next: (workout: Workout) => {
        this.workoutForm = new WorkoutForm(workout);
        this.isEditMode = true;
        this.workoutsService.readCachedLastMonthWorkouts(workout.dateCreated).subscribe({
          next: (workouts) => {
            this.populatePreviousExercisesMap(workouts);
            this.isApiLoading.set(false);
          },
          error: () => {
            this.isApiLoading.set(false);
          },
        });
      },
      error: (error) => {
        console.error('Failed to load workout:', error);
        this.isEditMode = false;
        this.isApiLoading.set(false);
      },
    });
  }

  private populatePreviousExercisesMap(workouts: Workout[]): void {
    this.previousExercisesMap.clear();

    workouts.forEach((workout) => {
      workout.exercises.forEach((exercise) => {
        const exerciseTypeId = exercise.exerciseType.id;

        const previousExercise: ExerciseInstancePrevious = {
          ...exercise,
          lastWorkoutDate: workout.dateCreated,
        };

        if (this.previousExercisesMap.has(exerciseTypeId)) {
          this.previousExercisesMap.get(exerciseTypeId)!.push(previousExercise);
        } else {
          this.previousExercisesMap.set(exerciseTypeId, [previousExercise]);
        }
      });
    });

    this.previousExercisesMap.forEach((exercises, exerciseTypeId) => {
      exercises.sort(
        (a, b) => new Date(b.lastWorkoutDate).getTime() - new Date(a.lastWorkoutDate).getTime(),
      );
    });
    this.addPreviousExerciseDataToInstanceForms();
  }

  addPreviousExerciseDataToInstanceForms(): void {
    // Iterate through all exercise form instances
    this.workoutForm.exercisesArray.controls.forEach((exerciseForm) => {
      const exerciseTypeId = exerciseForm.typeId;

      if (exerciseTypeId && this.previousExercisesMap.has(exerciseTypeId)) {
        // Get previous exercises for this exercise type
        const previousExercises = this.previousExercisesMap.get(exerciseTypeId)!;

        // Bind previous exercises to the form instance
        exerciseForm.previousExercises = previousExercises;
      } else {
        // Clear previous exercises if no data available
        exerciseForm.previousExercises = [];
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  discardWorkout(): void {
    //canDeactivate will handle the confirmation
    this.router.navigate(['/dashboard']);
  }

  canDeactivate(): CanDeactivateResult {
    return {
      canDeactivate: !this.workoutForm.dirty,
      modalData: {
        title: 'Discard Workout?',
        message: 'You have unsaved changes to your workout.',
        confirmText: 'Discard',
        cancelText: 'Cancel',
      },
    };
  }

  hasExerciseVariation(exerciseInstanceControl: ExerciseInstanceForm): boolean {
    const exerciseTypeSimple = exerciseInstanceControl.controls.exerciseType.value;

    if (!exerciseTypeSimple?.id) {
      return false;
    }

    const fullExerciseType = this.exerciseTypes.find((et) => et.id === exerciseTypeSimple.id);

    return !!fullExerciseType?.variationOfExercise;
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
