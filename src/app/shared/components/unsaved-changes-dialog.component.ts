import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface UnsavedChangesDialogData {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

@Component({
  selector: 'app-unsaved-changes-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  template: `
    <div class="p-6">
      <div class="mb-4 flex items-center gap-3">
        <mat-icon class="text-3xl text-amber-500">warning</mat-icon>
        <h2 class="text-xl font-semibold">{{ data.title || 'Unsaved Changes' }}</h2>
      </div>

      <div class="mb-6">
        <p class="leading-relaxed text-gray-600">
          {{
            data.message ||
              'You have unsaved changes that will be lost if you leave this page. Are you sure you want to continue?'
          }}
        </p>
      </div>

      <div class="flex justify-end gap-3">
        <button mat-stroked-button (click)="onCancel()" class="px-6">
          {{ data.cancelText || 'Cancel' }}
        </button>
        <button mat-raised-button color="warn" (click)="onConfirm()" class="px-6">
          <mat-icon class="mr-2">exit_to_app</mat-icon>
          {{ data.confirmText || 'Leave Page' }}
        </button>
      </div>
    </div>
  `,
})
export class UnsavedChangesDialogComponent {
  private dialogRef = inject(MatDialogRef<UnsavedChangesDialogComponent>);

  data: UnsavedChangesDialogData = {};

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
