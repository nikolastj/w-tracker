import { Injectable, inject } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of, firstValueFrom } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CanComponentDeactivate } from '../interfaces/can-component-deactivate.interface';
import {
  UnsavedChangesDialogComponent,
  UnsavedChangesDialogData,
} from '../../shared/components/unsaved-changes-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  private dialog = inject(MatDialog);

  canDeactivate(
    component: CanComponentDeactivate,
  ): Observable<boolean> | Promise<boolean> | boolean {
    // If component doesn't implement canDeactivate, allow navigation
    if (!component.canDeactivate) {
      return true;
    }

    // Get the result from component's canDeactivate method
    const canDeactivateResult = component.canDeactivate();

    // Handle synchronous boolean result
    if (typeof canDeactivateResult === 'boolean') {
      return canDeactivateResult ? true : this.showConfirmationDialog();
    }

    // Handle Promise result
    if (canDeactivateResult instanceof Promise) {
      return canDeactivateResult.then(async (canDeactivate) => {
        if (canDeactivate) {
          return true;
        }
        const result = await firstValueFrom(this.showConfirmationDialog());
        return !!result;
      });
    }

    // Handle Observable result
    return canDeactivateResult.pipe(
      switchMap((canDeactivate) => (canDeactivate ? of(true) : this.showConfirmationDialog())),
    );
  }

  private showConfirmationDialog(data?: UnsavedChangesDialogData): Observable<boolean> {
    const dialogRef = this.dialog.open(UnsavedChangesDialogComponent, {
      width: '450px',
      maxWidth: '90vw',
      disableClose: true,
      data: data || {},
    });

    // Inject data into the component
    dialogRef.componentInstance.data = data || {};

    return dialogRef.afterClosed().pipe(
      map((result) => !!result), // Convert undefined/null to false
    );
  }
}
