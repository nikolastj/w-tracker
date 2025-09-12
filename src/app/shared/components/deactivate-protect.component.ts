import { HostListener, Directive } from '@angular/core';
import { CanComponentDeactivate, CanDeactivateResult } from '../../core';
import { UnsavedChangesDialogData } from './unsaved-changes-dialog.component';

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

  //Set the modal data for the custom confirmation dialog
  protected getConfirmationDialogData(): UnsavedChangesDialogData | undefined {
    return undefined;
  }
  protected getBeforeUnloadMessage(): string {
    return 'You have unsaved changes that may be lost.';
  }

  // Abstract method that subclasses must implement
  //Determine if there are unsaved changes that should prevent navigation
  protected abstract hasUnsavedChanges(): boolean;
}
