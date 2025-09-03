import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

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
export class PublicHeaderComponent {}
