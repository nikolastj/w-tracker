import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Muscle } from '../models/muscle.model';
import { CacheResponseService } from './cache-response.service';
import { handleNotifications } from '../../core';

@Injectable({
  providedIn: 'root',
})
export class MuscleDataService extends CacheResponseService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {
    super();
  }

  getMuscleData(): Observable<Muscle[]> {
    return this.getWithCache('muscles', {}, () =>
      this.http.get<Muscle[]>(`${this.API_URL}/muscles`).pipe(
        handleNotifications({
          errorMessage: 'Failed to load muscle data. Please try again.',
        }),
      ),
    );
  }
}
