import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ExerciseType } from '../models/exercise-type.model';
import { CacheResponseService } from './cache-response.service';
import { handleNotifications } from '../../core';

@Injectable({
  providedIn: 'root',
})
export class ExerciseTypesService extends CacheResponseService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    super();
  }

  getExerciseTypes(): Observable<ExerciseType[]> {
    return this.getWithCache('exercise-types', {}, () =>
      this.http.get<ExerciseType[]>(`${this.API_URL}/exercise-types`).pipe(
        handleNotifications({
          errorMessage: 'Failed to load exercise types. Please try again.',
        }),
      ),
    );
  }
}
