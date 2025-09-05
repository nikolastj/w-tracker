# CanDeactivate Guard System

This system provides a reusable way to handle unsaved changes detection and user confirmation when navigating away from form components.

## Components Created

### 1. `CanComponentDeactivate` Interface

**Location**: `src/app/core/interfaces/can-component-deactivate.interface.ts`

Components that want to use the guard should implement this interface:

```typescript
export interface CanComponentDeactivate {
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean;
}
```

### 2. `CanDeactivateGuard`

**Location**: `src/app/core/guards/can-deactivate.guard.ts`

The guard that checks for unsaved changes and shows a confirmation dialog when needed.

### 3. `UnsavedChangesDialogComponent`

**Location**: `src/app/shared/components/unsaved-changes-dialog.component.ts`

A Material Design dialog that asks users to confirm navigation when there are unsaved changes.

## How to Use

### Step 1: Implement the Interface in Your Component

```typescript
import { CanComponentDeactivate } from '../../core';

export class MyFormComponent implements CanComponentDeactivate {
  myForm = new FormGroup({...});

  canDeactivate(): boolean {
    // Return false if there are unsaved changes
    return !this.myForm.dirty;
  }
}
```

### Step 2: Add the Guard to Your Route

```typescript
import { CanDeactivateGuard } from './core';

export const routes: Routes = [
  {
    path: 'my-form',
    canDeactivate: [CanDeactivateGuard],
    component: MyFormComponent,
  },
];
```

### Step 3: That's it!

The guard will automatically:

- Call your component's `canDeactivate()` method
- If it returns `false`, show the confirmation dialog
- Block navigation if user cancels, allow if user confirms

## Advanced Usage

### Async Checks

Your `canDeactivate` method can return a Promise or Observable:

```typescript
canDeactivate(): Observable<boolean> {
  return this.saveStatus$.pipe(
    map(status => status === 'saved')
  );
}

// Or with Promise
async canDeactivate(): Promise<boolean> {
  const hasUnsavedChanges = await this.checkUnsavedChanges();
  return !hasUnsavedChanges;
}
```

### Custom Dialog Messages

You can customize the dialog by creating your own version:

```typescript
// In the guard, you can extend it to accept custom messages
private showConfirmationDialog(data?: UnsavedChangesDialogData): Observable<boolean> {
  const dialogRef = this.dialog.open(UnsavedChangesDialogComponent, {
    data: {
      title: 'Custom Title',
      message: 'Custom message about unsaved changes',
      confirmText: 'Leave Anyway',
      cancelText: 'Stay Here'
    }
  });
  // ...
}
```

### Complex Form Logic

```typescript
export class ComplexFormComponent implements CanComponentDeactivate {
  form = new FormGroup({...});
  isSaving = false;
  isSaved = false;

  canDeactivate(): boolean {
    // Allow navigation if form is not dirty
    if (!this.form.dirty) {
      return true;
    }

    // Allow navigation if currently saving or already saved
    if (this.isSaving || this.isSaved) {
      return true;
    }

    // Block navigation if there are unsaved changes
    return false;
  }

  onSave(): void {
    this.isSaving = true;
    this.saveData().subscribe({
      next: () => {
        this.isSaved = true;
        this.isSaving = false;
        this.form.markAsPristine(); // Mark as not dirty
      },
      error: () => {
        this.isSaving = false;
      }
    });
  }
}
```

## Example Implementation

The `WorkoutCreateComponent` has been updated as an example:

```typescript
export class WorkoutCreateComponent implements OnInit, CanComponentDeactivate {
  workoutForm = new WorkoutForm();

  canDeactivate(): boolean {
    // Allow navigation if form is not dirty (no changes made)
    if (!this.workoutForm.dirty) {
      return true;
    }

    // Block navigation if there are unsaved changes
    return false;
  }
}
```

## Features

✅ **Easy to implement** - Just implement one interface method  
✅ **Automatic dialog handling** - Shows confirmation dialog when needed  
✅ **Supports async operations** - Works with Observables and Promises  
✅ **Customizable** - Can be extended for custom dialog messages  
✅ **Type-safe** - Full TypeScript support  
✅ **Material Design** - Uses Angular Material for consistent UI  
✅ **Accessible** - Follows Material Design accessibility guidelines

## Route Protection

Add the guard to any route that has forms with potential unsaved changes:

```typescript
{
  path: 'user/edit/:id',
  canDeactivate: [CanDeactivateGuard],
  component: UserEditComponent,
},
{
  path: 'settings',
  canDeactivate: [CanDeactivateGuard],
  component: SettingsComponent,
},
{
  path: 'workout/create',
  canDeactivate: [CanDeactivateGuard],
  component: WorkoutCreateComponent,
}
```

The guard is lightweight and only shows the dialog when actually needed!
