import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';

import { ColorSchemeService } from '../../core/services/color-scheme.service';

@Component({
  selector: 'app-public-header',
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
          <button mat-icon-button [matMenuTriggerFor]="publicMenu">
            <mat-icon>menu</mat-icon>
          </button>
        </div>

        <mat-menu #publicMenu="matMenu">
          <button mat-menu-item (click)="toggleTheme()">
            <mat-icon>{{
              (currentTheme$ | async) === 'dark' ? 'light_mode' : 'dark_mode'
            }}</mat-icon>
            <span>{{ (currentTheme$ | async) === 'dark' ? 'Light Mode' : 'Dark Mode' }}</span>
          </button>
          <mat-divider></mat-divider>
          <button mat-menu-item routerLink="/auth/login">
            <mat-icon>login</mat-icon>
            <span>Sign In</span>
          </button>
          <button mat-menu-item routerLink="/auth/register">
            <mat-icon>person_add</mat-icon>
            <span>Sign Up</span>
          </button>
        </mat-menu>
      </mat-toolbar>
    </div>
  `,
  styleUrl: './shared-header.component.scss',
})
export class PublicHeaderComponent {
  protected colorSchemeService = inject(ColorSchemeService);
  protected currentTheme$: Observable<'light' | 'dark'>;

  constructor() {
    this.currentTheme$ = this.colorSchemeService.getCurrentTheme$();
  }

  toggleTheme(): void {
    this.colorSchemeService.toggleTheme();
  }
}
