import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Page, PageResponse } from '../models/page.model';
import { handleNotifications } from '../../core';
import { NotificationService } from '../../core/services/notification.service';
import { Workout, CreateUpdateWorkout } from '../models/workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private readonly API_URL = environment.apiUrl;
  private paginatedWorkoutsCache = new Map<string, PageResponse<Workout>>();

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  getPaginatedWorkouts(pageRequest: Page): Observable<PageResponse<Workout>> {
    return this.http
      .post<PageResponse<Workout>>(`${this.API_URL}/workouts/paginated`, pageRequest)
      .pipe(
        tap((response) => {
          const cacheKey = JSON.stringify(pageRequest);
          this.paginatedWorkoutsCache.set(cacheKey, response);
        }),
        handleNotifications({
          errorMessage: 'Failed to load workouts. Please try again.',
          notificationService: this.notificationService,
        }),
      );
  }

  createWorkout(workout: CreateUpdateWorkout): Observable<Workout> {
    return this.http.post<Workout>(`${this.API_URL}/workouts`, workout).pipe(
      tap(() => {
        this.clearPaginatedWorkoutsCache();
      }),
      handleNotifications({
        successMessage: 'Workout saved successfully!',
        errorMessage: 'Failed to save workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  updateWorkout(id: number, workout: CreateUpdateWorkout): Observable<Workout> {
    return this.http.put<Workout>(`${this.API_URL}/workouts/${id}`, workout).pipe(
      tap(() => {
        this.clearPaginatedWorkoutsCache();
      }),
      handleNotifications({
        successMessage: 'Workout updated successfully!',
        errorMessage: 'Failed to update workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  getTodaysWorkout(): Observable<Workout | null> {
    return this.http.get<Workout | null>(`${this.API_URL}/workouts/todays-workout`).pipe(
      handleNotifications({
        errorMessage: "Failed to load today's workout. Please try again.",
        notificationService: this.notificationService,
      }),
    );
  }

  getWorkoutById(id: number): Observable<Workout> {
    return this.http.get<Workout>(`${this.API_URL}/workouts/${id}`).pipe(
      handleNotifications({
        errorMessage: 'Failed to load workout. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  readCachedLastMonthWorkouts(referenceDate?: Date | string): Observable<Workout[]> {
    // Calculate date range for last month
    const today = referenceDate ? new Date(referenceDate) : new Date();
    const endOfYesterday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1,
      23,
      59,
      59,
      999,
    );
    const oneMonthBefore = new Date(endOfYesterday);
    oneMonthBefore.setMonth(oneMonthBefore.getMonth() - 1);

    // First check if we have cached data
    if (this.paginatedWorkoutsCache.size > 0) {
      // Combine all cached page data into one array
      const allWorkouts: Workout[] = [];
      this.paginatedWorkoutsCache.forEach((pageResponse) => {
        allWorkouts.push(...pageResponse.data);
      });

      // Remove duplicates based on workout id
      const uniqueWorkouts = allWorkouts.filter(
        (workout, index, self) => index === self.findIndex((w) => w.id === workout.id),
      );

      // Sort and filter workouts
      const sortedAndFilteredWorkouts = this.sortAndFilterWorkouts(
        uniqueWorkouts,
        oneMonthBefore,
        endOfYesterday,
      );

      // If we have filtered results, return them
      if (sortedAndFilteredWorkouts.length > 2) {
        return of(sortedAndFilteredWorkouts);
      }
    }

    // No cached data or no results after filtering, fetch from API
    const pageRequest: Page = {
      page: 1,
      pageSize: 31, // Large page size to get all workouts in range
      fromDate: oneMonthBefore.toISOString(),
      toDate: endOfYesterday.toISOString(),
    };

    return this.getPaginatedWorkouts(pageRequest).pipe(
      map((response) => this.sortAndFilterWorkouts(response.data, oneMonthBefore, endOfYesterday)),
    );
  }

  private sortAndFilterWorkouts(workouts: Workout[], fromDate: Date, toDate: Date): Workout[] {
    return (
      workouts
        // Filter to only include workouts from the last month
        .filter((workout) => {
          const workoutDate = new Date(workout.dateCreated);
          return workoutDate >= fromDate && workoutDate <= toDate;
        })
        // Sort by date created (newest first)
        .sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime())
    );
  }

  clearPaginatedWorkoutsCache(): void {
    this.paginatedWorkoutsCache.clear();
  }
}
