import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Subject, takeUntil } from 'rxjs';
import { FormArray } from '@angular/forms';
import { ExerciseInstanceForm } from '../../models/exercise-instance.form';
import { SetInfoContainerComponent } from '../set-info/set-info-container.component';
import { ExerciseSetForm } from '../../models/exercise-set.form';

@Component({
  selector: 'app-exercise-progress-bar',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, SetInfoContainerComponent],
  templateUrl: './exercise-progress-bar.component.html',
  styleUrl: './exercise-progress-bar.component.scss',
})
export class ExerciseProgressBarComponent implements OnInit, OnDestroy {
  @Input() exerciseForm!: ExerciseInstanceForm;

  currentTotalWeight = 0;
  previousTotalWeight = 0;
  progressPercentage = 0;
  showProgress = false;
  previousWorkoutDate = '';
  previousSetsArray = new FormArray<ExerciseSetForm>([]);

  private destroy$ = new Subject<void>();

  get progressColorClass(): string {
    if (this.progressPercentage >= 95) return 'text-green-600 dark:text-green-400';
    if (this.progressPercentage >= 55) return 'text-blue-600 dark:text-blue-400';
    return 'text-orange-600 dark:text-orange-400';
  }

  get progressOpacity(): number {
    return Math.max(0.2, this.progressPercentage / 100);
  }

  ngOnInit(): void {
    this.setupProgressTracking();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private setupProgressTracking(): void {
    // Calculate initial values
    this.calculateTotalWeights();

    // Listen to changes in the sets array
    this.exerciseForm.setsArray.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.calculateTotalWeights();
    });

    // Listen to individual set changes
    this.exerciseForm.setsArray.controls.forEach((setForm, index) => {
      setForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.calculateTotalWeights();
      });
    });

    // Listen for new sets being added
    this.watchForNewSets();
  }

  private watchForNewSets(): void {
    let previousSetCount = this.exerciseForm.setsArray.length;

    this.exerciseForm.setsArray.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      const currentSetCount = this.exerciseForm.setsArray.length;

      if (currentSetCount > previousSetCount) {
        // New sets were added, listen to their changes
        for (let i = previousSetCount; i < currentSetCount; i++) {
          const newSetForm = this.exerciseForm.setsArray.at(i);
          newSetForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.calculateTotalWeights();
          });
        }
      }

      previousSetCount = currentSetCount;
    });
  }

  private calculateTotalWeights(): void {
    // Calculate current total weight (excluding warmup sets)
    this.currentTotalWeight = this.calculateCurrentWeight();

    // Calculate previous total weight from the latest previous exercise
    this.previousTotalWeight = this.calculatePreviousWeight();

    // Set previous workout date and sets
    this.setPreviousWorkoutInfo();

    // Calculate progress percentage
    if (this.previousTotalWeight > 0) {
      this.progressPercentage = (this.currentTotalWeight / this.previousTotalWeight) * 100;
      this.showProgress = true;
    } else {
      this.progressPercentage = 0;
      this.showProgress = false;
    }
  }

  private calculateCurrentWeight(): number {
    const sets = this.exerciseForm.setsArray.value;
    return sets
      .filter((set) => !set.isWarmupSet) // Exclude warmup sets
      .reduce((total, set) => {
        const weight = set.weight || 0;
        const reps = set.reps || 0;
        return total + weight * reps;
      }, 0);
  }

  private calculatePreviousWeight(): number {
    const previousExercises = this.exerciseForm.previousExercises;

    if (!previousExercises || previousExercises.length === 0) {
      return 0;
    }

    // Get the most recent previous exercise (first in the sorted array)
    const latestPreviousExercise = previousExercises[0];

    return latestPreviousExercise.sets
      .filter((set) => !set.isWarmupSet) // Exclude warmup sets
      .reduce((total, set) => {
        const weight = set.weight || 0;
        const reps = set.reps || 0;
        return total + weight * reps;
      }, 0);
  }

  private setPreviousWorkoutInfo(): void {
    const previousExercises = this.exerciseForm.previousExercises;

    if (!previousExercises || previousExercises.length === 0) {
      this.previousWorkoutDate = '';
      this.previousSetsArray.clear();
      return;
    }

    // Get the most recent previous exercise (first in the sorted array)
    const latestPreviousExercise = previousExercises[0];

    // Format the date
    const date = new Date(latestPreviousExercise.lastWorkoutDate);
    this.previousWorkoutDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });

    // Clear and populate the FormArray with previous sets
    this.previousSetsArray.clear();
    const sortedSets = latestPreviousExercise.sets.sort((a, b) => a.order - b.order);
    sortedSets.forEach((set) => {
      this.previousSetsArray.push(new ExerciseSetForm(set));
    });
  }
}
