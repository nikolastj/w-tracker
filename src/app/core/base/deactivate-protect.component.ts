import { HostListener, Directive } from '@angular/core';
import { CanComponentDeactivate, CanDeactivateResult } from '../interfaces/can-component-deactivate.interface';
import { UnsavedChangesDialogData } from '../../shared/components/unsaved-changes-dialog.component';

/**
 * Base component that provides CanDeactivate functionality with page reload protection.
 * Components that need to protect against unsaved changes should extend this component.
 *
 * Usage:
 * 1. Extend this component
 * 2. Override the abstract hasUnsavedChanges() method
 * 3. Optionally override getBeforeUnloadMessage() and getConfirmationDialogData()
 */
@Directive()
export abstract class DeactivateProtectComponent implements CanComponentDeactivate {
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent): string | void {
    if (this.hasUnsavedChanges()) {
      // The actual message may not be shown in modern browsers,
      // but returning any string will trigger the browser's confirmation dialog
      const message = this.getBeforeUnloadMessage();
      event.returnValue = message;
      return message;
    }
  }

  canDeactivate(): CanDeactivateResult {
    const hasUnsaved = this.hasUnsavedChanges();

    return {
      canDeactivate: !hasUnsaved,
      modalData: hasUnsaved ? this.getConfirmationDialogData() : undefined,
    };
  }

  /**
   * Get the message to show in the browser's beforeunload dialog
   * Override this method to customize the message
   */
  protected getBeforeUnloadMessage(): string {
    return 'You have unsaved changes that may be lost.';
  }

  /**
   * Get the modal data for the custom confirmation dialog
   * Override this method to customize the dialog
   */
  protected getConfirmationDialogData(): UnsavedChangesDialogData | undefined {
    return undefined;
  }

  // Abstract method that subclasses must implement

  /**
   * Determine if there are unsaved changes that should prevent navigation
   */
  protected abstract hasUnsavedChanges(): boolean;
}
