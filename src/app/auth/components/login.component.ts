import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Subject, takeUntil, tap } from 'rxjs';

import { AuthStateService } from '../services/auth-state.service';
import { AuthApiService } from '../services/auth-api.service';
import { LoginUserForm } from '../models/login-user.form';
import { LoginResponse } from '../models/auth.models';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  styleUrl: '../auth.scss',
  template: `
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="auth-heading mt-6 text-center text-3xl font-extrabold">
          Sign in to your account
        </h2>
        <p class="auth-text mt-2 text-center text-sm">
          Or
          <a routerLink="/auth/register" class="font-medium text-indigo-600 hover:text-indigo-500">
            create a new account
          </a>
        </p>
      </div>

      <mat-card class="auth-card p-6">
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Username</mat-label>
              <input
                matInput
                formControlName="username"
                placeholder="Enter your username"
                autocomplete="username"
              />
              <mat-icon matSuffix>person</mat-icon>
              <mat-error *ngIf="loginForm.get('username')?.hasError('required')">
                Username is required
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Password</mat-label>
              <input
                matInput
                [type]="hidePassword ? 'password' : 'text'"
                formControlName="password"
                placeholder="Enter your password"
                autocomplete="current-password"
              />
              <button
                mat-icon-button
                matSuffix
                (click)="hidePassword = !hidePassword"
                [attr.aria-label]="'Hide password'"
                [attr.aria-pressed]="hidePassword"
                type="button"
              >
                <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
              <mat-error *ngIf="loginForm.get('password')?.hasError('minlength')">
                Password must be at least 6 characters long
              </mat-error>
            </mat-form-field>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                routerLink="/auth/forgot-password"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              mat-raised-button
              color="primary"
              type="submit"
              class="w-full"
              [disabled]="loginForm.invalid || isLoading"
            >
              <mat-spinner *ngIf="isLoading" diameter="20" class="mr-2"></mat-spinner>
              <span *ngIf="!isLoading">Sign In</span>
            </button>
          </div>
        </form>
      </mat-card>
    </div>
  `,
})
export class LoginComponent implements OnDestroy {
  private authStateService = inject(AuthStateService);
  private authApiService = inject(AuthApiService);
  private router = inject(Router);
  private destroy$ = new Subject<void>();

  hidePassword = true;
  isLoading = false;

  loginForm = new LoginUserForm();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      const credentials = this.loginForm.getSubmitValue();

      this.authApiService
        .login(credentials)
        .pipe(
          tap((response: LoginResponse) => {
            this.authStateService.setAuthState(response);
          }),
          takeUntil(this.destroy$),
        )
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.router.navigate(['/dashboard']);
          },
          error: () => {
            this.isLoading = false;
          },
        });
    }
  }
}
