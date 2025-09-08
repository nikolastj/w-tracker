import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable, map } from 'rxjs';

import { AuthStateService } from '../../auth/services/auth-state.service';
import { User } from '../../auth/models/auth.models';
import { WorkoutsTimelineComponent } from '../timeline';
import { FeatureSelectionComponent } from './feature-selection.component';
import { Workout } from '../../shared';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    WorkoutsTimelineComponent,
    FeatureSelectionComponent,
  ],
  template: `
    <div class="flex h-full w-full flex-col overflow-hidden lg:flex-row">
      <div
        class="h-1/3 border-b-2 border-solid border-gray-500 p-4 lg:order-2 lg:h-full lg:w-2/3 lg:border-b-0 lg:border-l-2"
      >
        <app-feature-selection
          [selectedWorkout]="selectedWorkout()"
          (clearWorkoutSelection)="onClearWorkoutSelection()"
        >
        </app-feature-selection>
      </div>
      <app-workouts-timeline
        class="h-2/3 lg:order-1 lg:h-full lg:w-1/3"
        (workoutSelected)="onWorkoutSelected($event)"
      >
      </app-workouts-timeline>
    </div>
  `,
})
export class DashboardComponent {
  private authStateService = inject(AuthStateService);

  currentUser$: Observable<User | null>;
  selectedWorkout = signal<Workout | null>(null);

  constructor() {
    this.currentUser$ = this.authStateService.authState$.pipe(map((authState) => authState.user));
  }

  onWorkoutSelected(workout: Workout): void {
    this.selectedWorkout.set(workout);
  }

  onClearWorkoutSelection(): void {
    this.selectedWorkout.set(null);
  }
}
