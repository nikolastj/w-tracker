import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { handleNotifications } from '../../core';
import { NotificationService } from '../../core/services/notification.service';
import { StretchWorkout, CreateStretchWorkout } from '../models/stretch-workout.model';
import { Page, PageResponse } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class StretchWorkoutsService {
  private readonly API_URL = environment.apiUrl;
  private paginatedWorkoutsCache = new Map<string, PageResponse<StretchWorkout>>();

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  createStretchWorkout(workout: CreateStretchWorkout): Observable<StretchWorkout> {
    return this.http.post<StretchWorkout>(`${this.API_URL}/stretch-workouts`, workout).pipe(
      tap(() => {
        this.clearPaginatedWorkoutsCache();
      }),
      handleNotifications({
        successMessage: 'Stretch workout saved successfully!',
        errorMessage: 'Failed to save stretch workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  updateStretchWorkout(id: number, workout: CreateStretchWorkout): Observable<StretchWorkout> {
    return this.http.put<StretchWorkout>(`${this.API_URL}/stretch-workouts/${id}`, workout).pipe(
      tap(() => {
        this.clearPaginatedWorkoutsCache();
      }),
      handleNotifications({
        successMessage: 'Stretch workout updated successfully!',
        errorMessage: 'Failed to update stretch workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  deleteStretchWorkout(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/stretch-workouts/${id}`).pipe(
      tap(() => {
        this.clearPaginatedWorkoutsCache();
      }),
      handleNotifications({
        successMessage: 'Stretch workout deleted successfully!',
        errorMessage: 'Failed to delete stretch workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  getStretchWorkoutById(id: number): Observable<StretchWorkout> {
    return this.http.get<StretchWorkout>(`${this.API_URL}/stretch-workouts/${id}`).pipe(
      handleNotifications({
        errorMessage: 'Failed to load stretch workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  getAllStretchWorkouts(): Observable<StretchWorkout[]> {
    return this.http.get<StretchWorkout[]>(`${this.API_URL}/stretch-workouts`).pipe(
      handleNotifications({
        errorMessage: 'Failed to load stretch workouts. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  getPaginatedStretchWorkouts(pageRequest: Page): Observable<PageResponse<StretchWorkout>> {
    return this.http
      .post<PageResponse<StretchWorkout>>(`${this.API_URL}/stretch-workouts/paginated`, pageRequest)
      .pipe(
        tap((response) => {
          const cacheKey = JSON.stringify(pageRequest);
          this.paginatedWorkoutsCache.set(cacheKey, response);
        }),
        handleNotifications({
          errorMessage: 'Failed to load stretch workouts. Please try again.',
          notificationService: this.notificationService,
        }),
      );
  }

  clearPaginatedWorkoutsCache(): void {
    this.paginatedWorkoutsCache.clear();
  }
}
