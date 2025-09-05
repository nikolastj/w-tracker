import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable, map } from 'rxjs';

import { AuthStateService } from '../../auth/services/auth-state.service';
import { User } from '../../auth/models/auth.models';
import { WorkoutsTimelineComponent } from './workouts-timeline.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, WorkoutsTimelineComponent],
  template: `
    <div class="flex h-full w-full flex-col overflow-hidden lg:flex-row">
      <div class="h-1/3 bg-gray-100 p-4 lg:order-2 lg:h-full lg:w-2/3">
        place holder for other components
      </div>
      <app-workouts-timeline class="h-2/3 lg:order-1 lg:h-full lg:w-1/3"></app-workouts-timeline>
    </div>
  `,
})
export class DashboardComponent {
  private authStateService = inject(AuthStateService);

  currentUser$: Observable<User | null>;

  constructor() {
    this.currentUser$ = this.authStateService.authState$.pipe(map((authState) => authState.user));
  }
}
