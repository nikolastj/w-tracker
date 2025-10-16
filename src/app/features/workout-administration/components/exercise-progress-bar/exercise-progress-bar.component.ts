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

  currentTotalProgress = 0;
  previousTotalProgress = 0;
  progressUnit = 'kg';
  progressPercentage = 0;
  showProgress = false;
  previousWorkoutDate = '';
  previousSetsArray = new FormArray<ExerciseSetForm>([]);
  showCelebration = false;
  hasReached100 = false;

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
    const previousPercentage = this.progressPercentage;

    // Set the progress unit based on exercise type
    this.progressUnit = this.exerciseForm.isCore ? 'reps' : 'kg';

    // Calculate current total progress (weight or reps based on exercise type)
    this.currentTotalProgress = this.calculateCurrentProgress();

    // Calculate previous total progress from the latest previous exercise
    this.previousTotalProgress = this.calculatePreviousProgress();

    // Set previous workout date and sets
    this.setPreviousWorkoutInfo();

    // Calculate progress percentage
    if (this.previousTotalProgress > 0) {
      this.progressPercentage = (this.currentTotalProgress / this.previousTotalProgress) * 100;
      this.showProgress = true;

      // Check if we reached 100% for the first time
      if (this.progressPercentage >= 100 && !this.hasReached100 && previousPercentage < 100) {
        this.triggerCelebration();
        this.hasReached100 = true;
      }
    } else {
      this.progressPercentage = 0;
      this.showProgress = false;
    }
  }

  private triggerCelebration(): void {
    this.showCelebration = true;
  }

  private calculateCurrentProgress(): number {
    const sets = this.exerciseForm.setsArray.value;
    const isCore = this.exerciseForm.isCore;

    return sets
      .filter((set) => !set.isWarmupSet) // Exclude warmup sets
      .reduce((total, set) => {
        const weight = set.weight || 0;
        const reps = set.reps || 0;

        if (isCore) {
          // For core exercises, track total reps
          return total + reps;
        } else {
          // For non-core exercises, track total weight (weight * reps)
          return total + weight * reps;
        }
      }, 0);
  }

  private calculatePreviousProgress(): number {
    const previousExercises = this.exerciseForm.previousExercises;

    if (!previousExercises || previousExercises.length === 0) {
      return 0;
    }

    // Get the most recent previous exercise (first in the sorted array)
    const latestPreviousExercise = previousExercises[0];
    const isCore = this.exerciseForm.isCore;

    return latestPreviousExercise.sets
      .filter((set) => !set.isWarmupSet) // Exclude warmup sets
      .reduce((total, set) => {
        const weight = set.weight || 0;
        const reps = set.reps || 0;

        if (isCore) {
          // For core exercises, track total reps
          return total + reps;
        } else {
          // For non-core exercises, track total weight (weight * reps)
          return total + weight * reps;
        }
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
