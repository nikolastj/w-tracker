import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsTimelineComponent } from './components/workouts-timeline.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, WorkoutsTimelineComponent],
  template: `
    <div class="h-full w-full">
      <app-workouts-timeline></app-workouts-timeline>
    </div>
  `,
})
export class TimelineComponent {}
