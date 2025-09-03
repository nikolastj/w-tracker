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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { RegisterUserForm } from '../models/register-user.form';

@Component({
  selector: 'app-register',
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
    MatSnackBarModule,
  ],
  template: `
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="auth-heading mt-6 text-center text-3xl font-extrabold">Create your account</h2>
        <p class="auth-text mt-2 text-center text-sm">
          Or
          <a routerLink="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            sign in to your existing account
          </a>
        </p>
      </div>

      <mat-card class="auth-card p-6">
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <mat-form-field appearance="outline">
              <mat-label>First Name</mat-label>
              <input
                matInput
                formControlName="firstName"
                placeholder="First name"
                autocomplete="given-name"
              />
              <mat-error *ngIf="registerForm.get('firstName')?.hasError('required')">
                First name is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Last Name</mat-label>
              <input
                matInput
                formControlName="lastName"
                placeholder="Last name"
                autocomplete="family-name"
              />
              <mat-error *ngIf="registerForm.get('lastName')?.hasError('required')">
                Last name is required
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Username</mat-label>
              <input
                matInput
                formControlName="username"
                placeholder="Choose a username"
                autocomplete="username"
              />
              <mat-icon matSuffix>person</mat-icon>
              <mat-error *ngIf="registerForm.get('username')?.hasError('required')">
                Username is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('username')?.hasError('minlength')">
                Username must be at least 3 characters long
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Email</mat-label>
              <input
                matInput
                type="email"
                formControlName="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
              <mat-icon matSuffix>email</mat-icon>
              <mat-error *ngIf="registerForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('email')?.hasError('email')">
                Please enter a valid email address
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Bio</mat-label>
              <textarea
                matInput
                formControlName="bio"
                placeholder="Tell us about yourself"
                rows="3"
              ></textarea>
              <mat-icon matSuffix>description</mat-icon>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Password</mat-label>
              <input
                matInput
                [type]="hidePassword ? 'password' : 'text'"
                formControlName="password"
                placeholder="Choose a password"
                autocomplete="new-password"
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
              <mat-error *ngIf="registerForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('password')?.hasError('minlength')">
                Password must be at least 6 characters long
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Confirm Password</mat-label>
              <input
                matInput
                [type]="hideConfirmPassword ? 'password' : 'text'"
                formControlName="confirmPassword"
                placeholder="Confirm your password"
                autocomplete="new-password"
              />
              <button
                mat-icon-button
                matSuffix
                (click)="hideConfirmPassword = !hideConfirmPassword"
                [attr.aria-label]="'Hide password'"
                [attr.aria-pressed]="hideConfirmPassword"
                type="button"
              >
                <mat-icon>{{ hideConfirmPassword ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              <mat-error *ngIf="registerForm.get('confirmPassword')?.hasError('required')">
                Please confirm your password
              </mat-error>
              <mat-error *ngIf="registerForm.get('confirmPassword')?.hasError('passwordMismatch')">
                Passwords do not match
              </mat-error>
            </mat-form-field>
          </div>

          <div class="pt-4">
            <button
              mat-raised-button
              color="primary"
              type="submit"
              class="w-full"
              [disabled]="registerForm.invalid || isLoading"
            >
              <mat-spinner *ngIf="isLoading" diameter="20" class="mr-2"></mat-spinner>
              Create Account
            </button>
          </div>
        </form>
      </mat-card>
    </div>
  `,
})
export class RegisterComponent implements OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private destroy$ = new Subject<void>();

  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;

  registerForm = new RegisterUserForm();

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (this.registerForm.valid && !this.isLoading) {
      this.isLoading = true;
      const registerData = this.registerForm.getSubmitValue();

      this.authService
        .register(registerData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.snackBar.open('Account created successfully!', 'Close', {
              duration: 3000,
              panelClass: ['success-snackbar'],
            });
            this.router.navigate(['/auth/login']);
          },
          error: (error) => {
            this.isLoading = false;
            const errorMessage = error.error?.message || 'Registration failed. Please try again.';
            this.snackBar.open(errorMessage, 'Close', {
              duration: 5000,
              panelClass: ['error-snackbar'],
            });
          },
        });
    }
  }
}
