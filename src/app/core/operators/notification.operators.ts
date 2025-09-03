import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

export interface NotificationHandlerConfig {
  successMessage?: string;
  errorMessage?: string;
  redirectOnSuccess?: string;
  redirectOnError?: string;
  showNotifications?: boolean;
  extractErrorMessage?: (error: any) => string;
}

export function handleNotifications<T>(config: NotificationHandlerConfig = {}) {
  return (source: Observable<T>) => {
    const notificationService = inject(NotificationService);
    const router = inject(Router);

    const {
      successMessage,
      errorMessage = 'Operation failed. Please try again.',
      redirectOnSuccess,
      redirectOnError,
      showNotifications = true,
      extractErrorMessage = (error) => error.error?.message || errorMessage,
    } = config;

    return source.pipe(
      tap((response) => {
        if (showNotifications && successMessage) {
          notificationService.success(successMessage);
        }
        if (redirectOnSuccess) {
          router.navigate([redirectOnSuccess]);
        }
      }),
      catchError((error) => {
        console.error('API Error:', error);

        if (showNotifications) {
          const message = extractErrorMessage(error);
          notificationService.error(message);
        }
        if (redirectOnError) {
          router.navigate([redirectOnError]);
        }
        throw error; // Re-throw to allow component-level error handling
      }),
    );
  };
}

// Specialized operators for common auth patterns
export function handleAuthSuccess<T>(message: string, redirectTo: string) {
  return handleNotifications<T>({
    successMessage: message,
    redirectOnSuccess: redirectTo,
  });
}

export function handleAuthError<T>(fallbackMessage: string) {
  return handleNotifications<T>({
    errorMessage: fallbackMessage,
    showNotifications: true,
  });
}
