import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Page, PageResponse } from '../models/page.model';
import { handleNotifications } from '../../core';
import { NotificationService } from '../../core/services/notification.service';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private readonly API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  getPaginatedWorkouts(pageRequest: Page): Observable<PageResponse<Workout[]>> {
    return this.http
      .post<PageResponse<Workout[]>>(`${this.API_URL}/workouts/paginated`, pageRequest)
      .pipe(
        handleNotifications({
          errorMessage: 'Failed to load workouts. Please try again.',
          notificationService: this.notificationService,
        }),
      );
  }
}
