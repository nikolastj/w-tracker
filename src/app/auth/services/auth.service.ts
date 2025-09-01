import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  User,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  AuthState,
} from '../models/auth.models';

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

  /**
   * Login user with username and password
   */
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.API_URL}/login`, credentials).pipe(
      tap((response) => {
        this.setAuthState(response);
      }),
    );
  }

  /**
   * Register new user
   */
  register(userData: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.API_URL}/users`, userData).pipe(
      tap((response) => {
        if (response.token) {
          this.setAuthState({
            ...response.user,
            token: response.token,
          });
        }
      }),
    );
  }

  /**
   * Logout user
   */
  logout(): void {
    this.clearAuthState();
  }

  /**
   * Check if user is authenticated
   */
  isAuthenticated(): boolean {
    return this.authState.value.isAuthenticated;
  }

  /**
   * Get current user
   */
  getCurrentUser(): User | null {
    return this.authState.value.user;
  }

  /**
   * Get current token
   */
  getToken(): string | null {
    return this.authState.value.token;
  }

  /**
   * Request password reset (placeholder for future implementation)
   */
  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/forgot-password`, { email });
  }

  /**
   * Set authentication state and persist to localStorage
   */
  private setAuthState(authData: any): void {
    const newState: AuthState = {
      user: {
        id: authData.id,
        username: authData.username,
        email: authData.email,
        firstName: authData.firstName,
        lastName: authData.lastName,
        bio: authData.bio,
      },
      token: authData.token,
      isAuthenticated: true,
    };

    this.authState.next(newState);
    this.saveAuthToStorage(newState);
  }

  /**
   * Clear authentication state
   */
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

  /**
   * Save authentication data to localStorage
   */
  private saveAuthToStorage(authState: AuthState): void {
    if (authState.token) {
      localStorage.setItem('auth_token', authState.token);
    }
    if (authState.user) {
      localStorage.setItem('auth_user', JSON.stringify(authState.user));
    }
  }

  /**
   * Load authentication data from localStorage
   */
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
