import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { NotificationService } from '../services/notification.service';

export interface NotificationHandlerConfig {
  successMessage?: string;
  errorMessage?: string;
  showNotifications?: boolean;
  extractErrorMessage?: (error: any) => string;
  notificationService?: NotificationService;
}

export function handleNotifications<T>(config: NotificationHandlerConfig = {}) {
  return (source: Observable<T>) => {
    const {
      successMessage,
      errorMessage = 'Operation failed. Please try again.',
      showNotifications = true,
      extractErrorMessage = (error) => error.error?.message || errorMessage,
      notificationService,
    } = config;

    return source.pipe(
      tap((response) => {
        if (showNotifications && successMessage && notificationService) {
          notificationService.success(successMessage);
        }
      }),
      catchError((error) => {
        console.error('API Error:', error);

        if (showNotifications && notificationService) {
          const message = extractErrorMessage(error);
          notificationService.error(message);
        }
        throw error; // Re-throw to allow component-level error handling
      }),
    );
  };
}
