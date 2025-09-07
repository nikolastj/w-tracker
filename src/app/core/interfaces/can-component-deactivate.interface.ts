import { Observable } from 'rxjs';
import { UnsavedChangesDialogData } from '../../shared/components/unsaved-changes-dialog.component';

export interface CanDeactivateResult {
  canDeactivate: boolean;
  modalData?: UnsavedChangesDialogData;
}

export interface CanComponentDeactivate {
  canDeactivate():
    | Observable<boolean | CanDeactivateResult>
    | Promise<boolean | CanDeactivateResult>
    | boolean
    | CanDeactivateResult;
}
