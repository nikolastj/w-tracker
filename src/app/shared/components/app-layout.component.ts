import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { AppHeaderComponent } from './app-header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppHeaderComponent],
  template: `
    <div class="dashboard-background min-h-screen">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppLayoutComponent {}
