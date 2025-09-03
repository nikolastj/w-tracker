import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from './app-header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppHeaderComponent],
  template: `
    <div class="dashboard-background flex h-screen flex-col">
      <app-header></app-header>
      <div class="flex-1 overflow-y-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: './shared-layout.component.scss',
})
export class AppLayoutComponent {}
