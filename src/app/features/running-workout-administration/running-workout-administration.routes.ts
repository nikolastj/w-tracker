import { Routes } from '@angular/router';
import { CanDeactivateGuard } from '../../core';

export const runningWorkoutAdministrationRoutes: Routes = [
  {
    path: 'create',
    canDeactivate: [CanDeactivateGuard],
    loadComponent: () =>
      import('./components/running-workout-create/running-workout-create.component').then(
        (m) => m.RunningWorkoutCreateComponent,
      ),
  },
  // Future: edit route
  // {
  //   path: 'edit/:id',
  //   canDeactivate: [CanDeactivateGuard],
  //   loadComponent: () =>
  //     import('./components/running-workout-create/running-workout-create.component').then(
  //       (m) => m.RunningWorkoutCreateComponent,
  //     ),
  // },
];
