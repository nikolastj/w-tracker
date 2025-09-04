import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from '../models/auth.models';
import { handleNotifications } from '../../core';
import { NotificationService } from '../../core/services/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private readonly API_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
  ) {}

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, credentials).pipe(
      handleNotifications({
        successMessage: 'Login successful!',
        errorMessage: 'Login failed. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  register(userData: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.API_URL}/users`, userData).pipe(
      handleNotifications({
        successMessage: 'Account created successfully!',
        errorMessage: 'Registration failed. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/forgot-password`, { email }).pipe(
      handleNotifications({
        successMessage: 'Password reset email sent successfully!',
        errorMessage: 'Failed to send reset email. Please try again.',
        notificationService: this.notificationService,
      }),
    );
  }

  validateToken(token: string): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/validate`, { token });
  }

  refreshToken(refreshToken: string): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/refresh`, { refreshToken });
  }
}
