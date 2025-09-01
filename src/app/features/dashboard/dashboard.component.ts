import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { Observable, map } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/auth.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
  ],
  template: `
    <div class="min-h-screen bg-gray-50">
      <mat-toolbar color="primary" class="shadow-sm">
        <span class="flex-1">W-Tracker Dashboard</span>

        <button mat-icon-button [matMenuTriggerFor]="userMenu">
          <mat-icon>account_circle</mat-icon>
        </button>

        <mat-menu #userMenu="matMenu">
          <div class="border-b px-4 py-2">
            <p class="text-sm font-medium text-gray-900" *ngIf="currentUser$ | async as user">
              {{ user.firstName }} {{ user.lastName }}
            </p>
            <p class="text-xs text-gray-500" *ngIf="currentUser$ | async as user">
              {{ user.email }}
            </p>
          </div>
          <button mat-menu-item (click)="logout()">
            <mat-icon>logout</mat-icon>
            <span>Logout</span>
          </button>
        </mat-menu>
      </mat-toolbar>

      <div class="container mx-auto px-4 py-8">
        <div class="mb-8">
          <h1 class="mb-2 text-3xl font-bold text-gray-900">
            Welcome back<span *ngIf="currentUser$ | async as user">, {{ user.firstName }}!</span>
          </h1>
          <p class="text-gray-600">
            This is your dashboard. Here you can manage your work tracking activities.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <mat-card class="p-6">
            <h3 class="mb-2 text-lg font-semibold text-gray-900">Quick Stats</h3>
            <p class="text-gray-600">View your work tracking statistics and progress.</p>
            <button mat-raised-button color="primary" class="mt-4">View Stats</button>
          </mat-card>

          <mat-card class="p-6">
            <h3 class="mb-2 text-lg font-semibold text-gray-900">Recent Activity</h3>
            <p class="text-gray-600">Check your latest work tracking entries.</p>
            <button mat-raised-button color="primary" class="mt-4">View Activity</button>
          </mat-card>

          <mat-card class="p-6">
            <h3 class="mb-2 text-lg font-semibold text-gray-900">Start Tracking</h3>
            <p class="text-gray-600">Begin tracking your work time for today.</p>
            <button mat-raised-button color="primary" class="mt-4">Start Timer</button>
          </mat-card>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      mat-toolbar {
        position: sticky;
        top: 0;
        z-index: 10;
      }

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
  private router = inject(Router);

  currentUser$: Observable<User | null>;

  constructor() {
    this.currentUser$ = this.authService.authState$.pipe(map((authState) => authState.user));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
