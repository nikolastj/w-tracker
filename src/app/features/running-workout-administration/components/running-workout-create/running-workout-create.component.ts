import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { DeactivateProtectComponent } from '../../../../core';
import { LoaderComponent } from '../../../../shared/components';
import { RunningWorkoutsService } from '../../../../shared/services/running-workouts.service';
import {
  RunningWorkoutType,
  RUNNING_WORKOUT_TYPE_LABELS,
} from '../../../../shared/models/running-workout.model';
import { RunningWorkoutForm } from '../../models/running-workout.form';

@Component({
  selector: 'app-running-workout-create',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgSelectModule,
    LoaderComponent,
  ],
  templateUrl: './running-workout-create.component.html',
  styleUrl: './running-workout-create.component.scss',
})
export class RunningWorkoutCreateComponent extends DeactivateProtectComponent implements OnInit {
  runningWorkoutForm = new RunningWorkoutForm();
  isApiLoading = signal(false);

  // Workout type options for dropdown
  workoutTypes = Object.values(RunningWorkoutType).map((type) => ({
    value: type,
    label: RUNNING_WORKOUT_TYPE_LABELS[type],
  }));

  constructor(
    private router: Router,
    private runningWorkoutsService: RunningWorkoutsService,
  ) {
    super();
  }

  ngOnInit(): void {
    // Initialize form (no need to load existing workout for now)
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  discardWorkout(): void {
    this.router.navigate(['/dashboard']);
  }

  protected override hasUnsavedChanges(): boolean {
    return this.runningWorkoutForm.dirty;
  }

  protected override getConfirmationDialogData() {
    return {
      title: 'Discard Running Workout?',
      message: 'You have unsaved changes. Are you sure you want to leave?',
      confirmText: 'Discard',
    };
  }

  saveWorkout(): void {
    if (!this.runningWorkoutForm.valid) {
      this.runningWorkoutForm.markAllAsTouched();
      return;
    }

    this.isApiLoading.set(true);
    const workoutData = this.runningWorkoutForm.getSubmitValue();

    this.runningWorkoutsService
      .createRunningWorkout(workoutData)
      .pipe(finalize(() => this.isApiLoading.set(false)))
      .subscribe({
        next: () => {
          this.runningWorkoutForm.markAsPristine();
          this.router.navigate(['/dashboard']);
        },
      });
  }
}
