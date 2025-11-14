import { Routes } from '@angular/router';
import { CanDeactivateGuard } from '../../core';

export const stretchWorkoutAdministrationRoutes: Routes = [
  {
    path: 'create',
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () =>
      import('./components/stretch-workout-create/stretch-workout-create.component').then(
        (m) => m.StretchWorkoutCreateComponent,
      ),
  },
  // Future: edit route
  // {
  //   path: 'edit/:id',
  //   canDeactivate: [CanDeactivateGuard],
  //   loadComponent: () =>
  //     import('./components/stretch-workout-create/stretch-workout-create.component').then(
  //       (m) => m.StretchWorkoutCreateComponent,
  //     ),
  // },
];
