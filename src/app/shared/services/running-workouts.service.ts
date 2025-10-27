import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { handleNotifications } from '../../core';
import { NotificationService } from '../../core/services/notification.service';
import { RunningWorkout, CreateRunningWorkout } from '../models/running-workout.model';

@Injectable({
  providedIn: 'root',
})
export class RunningWorkoutsService {
  private readonly API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  createRunningWorkout(workout: CreateRunningWorkout): Observable<RunningWorkout> {
    return this.http.post<RunningWorkout>(`${this.API_URL}/running-workouts`, workout).pipe(
      handleNotifications({
        successMessage: 'Running workout saved successfully!',
        errorMessage: 'Failed to save running workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  getRunningWorkoutById(id: number): Observable<RunningWorkout> {
    return this.http.get<RunningWorkout>(`${this.API_URL}/running-workouts/${id}`).pipe(
      handleNotifications({
        errorMessage: 'Failed to load running workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  getAllRunningWorkouts(): Observable<RunningWorkout[]> {
    return this.http.get<RunningWorkout[]>(`${this.API_URL}/running-workouts`).pipe(
      handleNotifications({
        errorMessage: 'Failed to load running workouts. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  // Future: getPaginatedRunningWorkouts(), updateRunningWorkout(), deleteRunningWorkout()
}
