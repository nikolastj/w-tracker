import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { handleNotifications } from '../../core';
import { NotificationService } from '../../core/services/notification.service';
import { RunningWorkout, CreateRunningWorkout } from '../models/running-workout.model';
import { Page, PageResponse } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class RunningWorkoutsService {
  private readonly API_URL = environment.apiUrl;
  private paginatedWorkoutsCache = new Map<string, PageResponse<RunningWorkout>>();

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  createRunningWorkout(workout: CreateRunningWorkout): Observable<RunningWorkout> {
    return this.http.post<RunningWorkout>(`${this.API_URL}/running-workouts`, workout).pipe(
      tap(() => {
        this.clearPaginatedWorkoutsCache();
      }),
      handleNotifications({
        successMessage: 'Running workout saved successfully!',
        errorMessage: 'Failed to save running workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  updateRunningWorkout(id: number, workout: CreateRunningWorkout): Observable<RunningWorkout> {
    return this.http.put<RunningWorkout>(`${this.API_URL}/running-workouts/${id}`, workout).pipe(
      tap(() => {
        this.clearPaginatedWorkoutsCache();
      }),
      handleNotifications({
        successMessage: 'Running workout updated successfully!',
        errorMessage: 'Failed to update running workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  deleteRunningWorkout(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/running-workouts/${id}`).pipe(
      tap(() => {
        this.clearPaginatedWorkoutsCache();
      }),
      handleNotifications({
        successMessage: 'Running workout deleted successfully!',
        errorMessage: 'Failed to delete running workout. Please try again.',
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

  getPaginatedRunningWorkouts(pageRequest: Page): Observable<PageResponse<RunningWorkout>> {
    return this.http
      .post<PageResponse<RunningWorkout>>(`${this.API_URL}/running-workouts/paginated`, pageRequest)
      .pipe(
        tap((response) => {
          const cacheKey = JSON.stringify(pageRequest);
          this.paginatedWorkoutsCache.set(cacheKey, response);
        }),
        handleNotifications({
          errorMessage: 'Failed to load running workouts. Please try again.',
          notificationService: this.notificationService,
        }),
      );
  }

  clearPaginatedWorkoutsCache(): void {
    this.paginatedWorkoutsCache.clear();
  }
}
