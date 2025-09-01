import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
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
    <div
      class="auth-background flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      <div class="w-full max-w-md space-y-8">
        <div>
          <h2 class="auth-heading mt-6 text-center text-3xl font-extrabold">Reset your password</h2>
          <p class="auth-text mt-2 text-center text-sm">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>

        <mat-card class="auth-card p-6" *ngIf="!emailSent">
          <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <mat-form-field appearance="outline" class="w-full">
                <mat-label>Email Address</mat-label>
                <input
                  matInput
                  type="email"
                  formControlName="email"
                  placeholder="Enter your email address"
                  autocomplete="email"
                />
                <mat-icon matSuffix>email</mat-icon>
                <mat-error *ngIf="forgotPasswordForm.get('email')?.hasError('required')">
                  Email is required
                </mat-error>
                <mat-error *ngIf="forgotPasswordForm.get('email')?.hasError('email')">
                  Please enter a valid email address
                </mat-error>
              </mat-form-field>
            </div>

            <div>
              <button
                mat-raised-button
                color="primary"
                type="submit"
                class="w-full"
                [disabled]="forgotPasswordForm.invalid || isLoading"
              >
                <mat-spinner *ngIf="isLoading" diameter="20" class="mr-2"></mat-spinner>
                Send Reset Link
              </button>
            </div>

            <div class="text-center">
              <a routerLink="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
                Back to sign in
              </a>
            </div>
          </form>
        </mat-card>

        <!-- Success message card -->
        <mat-card class="auth-card p-6 text-center" *ngIf="emailSent">
          <div class="mb-4">
            <mat-icon class="text-6xl text-green-500">check_circle</mat-icon>
          </div>
          <h3 class="auth-heading mb-2 text-lg font-medium">Reset link sent!</h3>
          <p class="auth-text mb-6 text-sm">
            We've sent a password reset link to <strong>{{ submittedEmail }}</strong
            >. Please check your email and follow the instructions to reset your password.
          </p>
          <div class="space-y-3">
            <button
              mat-raised-button
              color="primary"
              (click)="resendEmail()"
              [disabled]="isLoading"
              class="w-full"
            >
              <mat-spinner *ngIf="isLoading" diameter="20" class="mr-2"></mat-spinner>
              Resend Email
            </button>
            <div>
              <a routerLink="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
                Back to sign in
              </a>
            </div>
          </div>
        </mat-card>
      </div>
    </div>
  `,
})
export class ForgotPasswordComponent implements OnDestroy {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  private destroy$ = new Subject<void>();

  isLoading = false;
  emailSent = false;
  submittedEmail = '';

  forgotPasswordForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.valid && !this.isLoading) {
      this.submitResetRequest();
    }
  }

  resendEmail(): void {
    if (!this.isLoading) {
      this.submitResetRequest();
    }
  }

  private submitResetRequest(): void {
    this.isLoading = true;
    const email = this.forgotPasswordForm.get('email')?.value || this.submittedEmail;

    this.authService
      .requestPasswordReset(email)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.emailSent = true;
          this.submittedEmail = email;
          this.snackBar.open('Password reset email sent successfully!', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar'],
          });
        },
        error: (error) => {
          this.isLoading = false;
          const errorMessage =
            error.error?.message || 'Failed to send reset email. Please try again.';
          this.snackBar.open(errorMessage, 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar'],
          });
        },
      });
  }
}
