import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { Observable, map } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/models/auth.models';
import { PublicHeaderComponent } from './public-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
  ],
  template: `
    <div class="header-container">
      <mat-toolbar color="primary" class="shadow-sm">
        <span class="header-title flex-1">Workout-Tracker</span>

        <div class="header-actions">
          <button mat-icon-button [matMenuTriggerFor]="userMenu">
            <mat-icon>account_circle</mat-icon>
          </button>
        </div>

        <mat-menu #userMenu="matMenu">
          <div class="border-b px-4 py-2">
            <p class="dashboard-heading text-sm font-medium" *ngIf="currentUser$ | async as user">
              {{ user.firstName }} {{ user.lastName }}
            </p>
            <p class="dashboard-text text-xs" *ngIf="currentUser$ | async as user">
              {{ user.email }}
            </p>
          </div>
          <button mat-menu-item (click)="toggleTheme()">
            <mat-icon>{{
              (currentTheme$ | async) === 'dark' ? 'light_mode' : 'dark_mode'
            }}</mat-icon>
            <span>{{ (currentTheme$ | async) === 'dark' ? 'Light Mode' : 'Dark Mode' }}</span>
          </button>
          <mat-divider></mat-divider>
          <button mat-menu-item (click)="logout()">
            <mat-icon>logout</mat-icon>
            <span>Logout</span>
          </button>
        </mat-menu>
      </mat-toolbar>
    </div>
  `,
  styleUrl: './shared-header.component.scss',
})
export class AppHeaderComponent extends PublicHeaderComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  currentUser$: Observable<User | null>;

  constructor() {
    super();
    this.currentUser$ = this.authService.authState$.pipe(map((authState) => authState.user));
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
