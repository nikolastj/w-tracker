import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  template: `
    <mat-toolbar color="primary" class="shadow-sm">
      <span class="flex-1">Workout-Tracker</span>
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
export class PublicHeaderComponent {}
