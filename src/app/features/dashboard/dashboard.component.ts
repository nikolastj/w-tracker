import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Observable, map } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/auth.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="dashboard-heading mb-2 text-3xl font-bold">
          Welcome back<span *ngIf="currentUser$ | async as user">, {{ user.firstName }}!</span>
        </h1>
        <p class="dashboard-text">
          This is your dashboard. Here you can manage your work tracking activities.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <mat-card class="dashboard-card p-6">
          <h3 class="dashboard-heading mb-2 text-lg font-semibold">Quick Stats</h3>
          <p class="dashboard-text">View your work tracking statistics and progress.</p>
          <button mat-raised-button color="primary" class="mt-4">View Stats</button>
        </mat-card>

        <mat-card class="dashboard-card p-6">
          <h3 class="dashboard-heading mb-2 text-lg font-semibold">Recent Activity</h3>
          <p class="dashboard-text">Check your latest work tracking entries.</p>
          <button mat-raised-button color="primary" class="mt-4">View Activity</button>
        </mat-card>

        <mat-card class="dashboard-card p-6">
          <h3 class="dashboard-heading mb-2 text-lg font-semibold">Start Tracking</h3>
          <p class="dashboard-text">Begin tracking your work time for today.</p>
          <button mat-raised-button color="primary" class="mt-4">Start Timer</button>
        </mat-card>
      </div>
    </div>
  `,
  styles: [
    `
      mat-card {
        box-shadow:
          0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.06);
      }

      mat-card:hover {
        box-shadow:
          0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        transition: box-shadow 0.3s ease;
      }
    `,
  ],
})
export class DashboardComponent {
  private authService = inject(AuthService);

  currentUser$: Observable<User | null>;

  constructor() {
    this.currentUser$ = this.authService.authState$.pipe(map((authState) => authState.user));
  }
}
