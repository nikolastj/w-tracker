import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface NotificationConfig {
  message: string;
  action?: string;
  duration?: number;
  panelClass?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);

  private readonly defaultConfig = {
    action: 'Close',
    duration: 3000,
  };

  success(message: string, config?: Partial<NotificationConfig>): void {
    this.show({
      message,
      panelClass: ['success-snackbar'],
      ...this.defaultConfig,
      ...config,
    });
  }

  error(message: string, config?: Partial<NotificationConfig>): void {
    this.show({
      message,
      panelClass: ['error-snackbar'],
      ...this.defaultConfig,
      duration: 5000,
      ...config,
    });
  }

  info(message: string, config?: Partial<NotificationConfig>): void {
    this.show({
      message,
      panelClass: ['info-snackbar'],
      ...this.defaultConfig,
      ...config,
    });
  }

  warning(message: string, config?: Partial<NotificationConfig>): void {
    this.show({
      message,
      panelClass: ['warning-snackbar'],
      ...this.defaultConfig,
      ...config,
    });
  }

  private show(config: NotificationConfig): void {
    this.snackBar.open(config.message, config.action, {
      duration: config.duration,
      panelClass: config.panelClass,
    });
  }
}
