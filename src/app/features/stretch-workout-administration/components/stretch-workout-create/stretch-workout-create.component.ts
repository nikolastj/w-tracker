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
import { StretchWorkoutsService } from '../../../../shared/services/stretch-workouts.service';
import {
  StretchWorkoutIntensity,
  STRETCH_WORKOUT_INTENSITY_LABELS,
} from '../../../../shared/models/stretch-workout.model';
import { StretchWorkoutForm } from '../../models/stretch-workout.form';

@Component({
  selector: 'app-stretch-workout-create',
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
  templateUrl: './stretch-workout-create.component.html',
  styleUrl: './stretch-workout-create.component.scss',
})
export class StretchWorkoutCreateComponent extends DeactivateProtectComponent implements OnInit {
  stretchWorkoutForm = new StretchWorkoutForm();
  isApiLoading = signal(false);

  // Intensity options for dropdown
  intensityOptions = Object.values(StretchWorkoutIntensity).map((intensity) => ({
    value: intensity,
    label: STRETCH_WORKOUT_INTENSITY_LABELS[intensity],
  }));

  constructor(
    private router: Router,
    private stretchWorkoutsService: StretchWorkoutsService,
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
    return this.stretchWorkoutForm.dirty;
  }

  protected override getConfirmationDialogData() {
    return {
      title: 'Discard Stretch Workout?',
      message: 'You have unsaved changes. Are you sure you want to leave?',
      confirmText: 'Discard',
    };
  }

  saveWorkout(): void {
    if (!this.stretchWorkoutForm.valid) {
      this.stretchWorkoutForm.markAllAsTouched();
      return;
    }

    this.isApiLoading.set(true);
    const workoutData = this.stretchWorkoutForm.getSubmitValue();

    this.stretchWorkoutsService
      .createStretchWorkout(workoutData)
      .pipe(finalize(() => this.isApiLoading.set(false)))
      .subscribe({
        next: () => {
          this.stretchWorkoutForm.markAsPristine();
          this.router.navigate(['/dashboard']);
        },
      });
  }
}
