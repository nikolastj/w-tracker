import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Observable, map } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/auth.models';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  template: `
    <mat-toolbar color="primary" class="shadow-sm">
      <span class="flex-1">Workout-Tracker</span>

      <button mat-icon-button [matMenuTriggerFor]="userMenu">
        <mat-icon>account_circle</mat-icon>
      </button>

      <mat-menu #userMenu="matMenu">
        <div class="border-b px-4 py-2">
          <p class="dashboard-heading text-sm font-medium" *ngIf="currentUser$ | async as user">
            {{ user.firstName }} {{ user.lastName }}
          </p>
          <p class="dashboard-text text-xs" *ngIf="currentUser$ | async as user">
            {{ user.email }}
          </p>
        </div>
        <button mat-menu-item (click)="logout()">
          <mat-icon>logout</mat-icon>
          <span>Logout</span>
        </button>
      </mat-menu>
    </mat-toolbar>
  `,
  styles: [
    `
      mat-toolbar {
        z-index: 10;
      }
    `,
  ],
})
export class AppHeaderComponent {
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
