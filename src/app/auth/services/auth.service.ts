import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  User,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  AuthState,
} from '../models/auth.models';
import { handleNotifications } from '../../core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = environment.apiUrl;

  private authState = new BehaviorSubject<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
  });

  public authState$ = this.authState.asObservable();

  constructor(private http: HttpClient) {
    // Check for existing token on service initialization
    this.loadAuthFromStorage();
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, credentials).pipe(
      tap((response) => {
        this.setAuthState(response);
      }),
      handleNotifications({
        successMessage: 'Login successful!',
        errorMessage: 'Login failed. Please try again.',
        redirectOnSuccess: '/dashboard',
      }),
    );
  }

  register(userData: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.API_URL}/users`, userData).pipe(
      tap((response) => {
        if (response.token) {
          this.setAuthState({
            id: response.user.id,
            username: response.user.username,
            email: response.user.email,
            firstName: response.user.firstName,
            lastName: response.user.lastName,
            bio: response.user.bio,
            token: response.token,
          });
        }
      }),
      handleNotifications({
        successMessage: 'Account created successfully!',
        errorMessage: 'Registration failed. Please try again.',
        redirectOnSuccess: '/auth/login',
      }),
    );
  }

  logout(): void {
    this.clearAuthState();
  }

  isAuthenticated(): boolean {
    return this.authState.value.isAuthenticated;
  }

  getCurrentUser(): User | null {
    return this.authState.value.user;
  }

  getToken(): string | null {
    return this.authState.value.token;
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/forgot-password`, { email }).pipe(
      handleNotifications({
        successMessage: 'Password reset email sent successfully!',
        errorMessage: 'Failed to send reset email. Please try again.',
      }),
    );
  }

  private setAuthState(authData: any): void {
    const newState: AuthState = {
      user: {
        id: authData.id,
        username: authData.username,
        email: authData.email,
        firstName: authData.firstName || '',
        lastName: authData.lastName || '',
        bio: authData.bio || '',
      },
      token: authData.token,
      isAuthenticated: true,
    };

    this.authState.next(newState);
    this.saveAuthToStorage(newState);
  }

  private clearAuthState(): void {
    const emptyState: AuthState = {
      user: null,
      token: null,
      isAuthenticated: false,
    };

    this.authState.next(emptyState);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }

  private saveAuthToStorage(authState: AuthState): void {
    if (authState.token) {
      localStorage.setItem('auth_token', authState.token);
    }
    if (authState.user) {
      localStorage.setItem('auth_user', JSON.stringify(authState.user));
    }
  }

  private loadAuthFromStorage(): void {
    const token = localStorage.getItem('auth_token');
    const userJson = localStorage.getItem('auth_user');

    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        this.authState.next({
          user,
          token,
          isAuthenticated: true,
        });
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        this.clearAuthState();
      }
    }
  }
}
