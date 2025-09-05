import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export class ConfirmActionDialogData {
  title: string;
  message: string;
  confirmText: string;
  cancelText: string;
  confirmButtonColor: 'primary' | 'accent' | 'warn';

  constructor(data: Partial<ConfirmActionDialogData> = {}) {
    this.title = data.title || 'Confirm Action';
    this.message = data.message || 'Are you sure you want to proceed with this action?';
    this.confirmText = data.confirmText || 'Confirm';
    this.cancelText = data.cancelText || 'Cancel';
    this.confirmButtonColor = data.confirmButtonColor || 'primary';
  }
}

@Component({
  selector: 'app-confirm-action-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="p-6">
      <div class="mb-4">
        <h2 class="text-xl font-semibold">{{ data.title }}</h2>
      </div>

      <div class="mb-6">
        <p class="leading-relaxed text-gray-600">
          {{ data.message }}
        </p>
      </div>

      <div class="flex justify-end gap-3">
        <button mat-stroked-button (click)="onCancel()" class="px-6">
          {{ data.cancelText }}
        </button>
        <button
          mat-raised-button
          [color]="data.confirmButtonColor"
          (click)="onConfirm()"
          class="px-6"
        >
          {{ data.confirmText }}
        </button>
      </div>
    </div>
  `,
})
export class ConfirmActionDialogComponent {
  private dialogRef = inject(MatDialogRef<ConfirmActionDialogComponent>);

  data: ConfirmActionDialogData = new ConfirmActionDialogData();

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
