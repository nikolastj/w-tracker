import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  NativeDateAdapter,
} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';

@Injectable()
export class MondayFirstDateAdapter extends NativeDateAdapter {
  override getFirstDayOfWeek(): number {
    return 1; // Monday = 1, Sunday = 0
  }
}

@Component({
  selector: 'app-timeline-calendar',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule, MatCardModule],
  providers: [{ provide: DateAdapter, useClass: MondayFirstDateAdapter }],
  templateUrl: './timeline-calendar.component.html',
  styleUrl: './timeline-calendar.component.scss',
})
export class TimelineCalendarComponent {}
