import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthState, User } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private authState = new BehaviorSubject<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
  });

  public authState$ = this.authState.asObservable();

  constructor() {
    this.loadAuthFromStorage();
  }

  getCurrentAuthState(): AuthState {
    return this.authState.value;
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

  setAuthState(authData: any): void {
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

  clearAuthState(): void {
    const emptyState: AuthState = {
      user: null,
      token: null,
      isAuthenticated: false,
    };

    this.authState.next(emptyState);
    this.removeAuthFromStorage();
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

  private removeAuthFromStorage(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }
}
