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
    );
  }

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

  logout(): void {
    const currentUser = this.getCurrentUser();
    if (currentUser?.username) {
      this.clearUserCache(currentUser.username);
    }
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

  getUser(): Observable<User | null> {
    if (!this.isAuthenticated()) {
      return of(null);
    }

    const currentUser = this.getCurrentUser();
    if (!currentUser?.username) {
      return of(null);
    }

    return this.getUserByUsername(currentUser.username);
  }

  getUserByUsername(username: string): Observable<User> {
    const cachedUser = this.getCachedUser(username);
    if (cachedUser) {
      return of(cachedUser);
    }

    return this.http.get<User>(`${this.API_URL}/users`).pipe(
      tap((user) => {
        const cacheKey = `${username}_wt`;
        localStorage.setItem(cacheKey, JSON.stringify(user));
      }),
    );
  }

  getCachedUser(username: string): User | null {
    const cacheKey = `${username}_wt`;
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      try {
        return JSON.parse(cachedData) as User;
      } catch (error) {
        console.error('Failed to parse cached user data:', error);
        localStorage.removeItem(cacheKey);
      }
    }

    return null;
  }

  clearUserCache(username: string): void {
    const cacheKey = `${username}_wt`;
    localStorage.removeItem(cacheKey);
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.API_URL}/auth/forgot-password`, { email });
  }

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
