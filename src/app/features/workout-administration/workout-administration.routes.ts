import { Routes } from '@angular/router';
import { CanDeactivateGuard } from '../../core';

export const workoutAdministrationRoutes: Routes = [
  {
    path: 'create',
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () => import('./workout-create.component').then((m) => m.WorkoutCreateComponent),
  },
  {
    path: 'edit/:id',
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () => import('./workout-create.component').then((m) => m.WorkoutCreateComponent),
  },
];
