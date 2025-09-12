import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { PublicHeaderComponent } from './public-header.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PublicHeaderComponent],
  template: `
    <div class="flex h-screen flex-col">
      <app-public-header></app-public-header>
      <div
        class="flex flex-1 items-center justify-center overflow-y-auto px-4 py-12 sm:px-6 lg:px-8"
      >
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrl: './shared-layout.component.scss',
})
export class PublicLayoutComponent {}
