import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  template: `
    <div
      class="loader-background flex h-full w-full items-center justify-center"
      [style.opacity]="opacity / 100"
    >
      <mat-spinner diameter="50" color="primary"></mat-spinner>
    </div>
  `,
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  @Input() opacity: number = 70;
}
