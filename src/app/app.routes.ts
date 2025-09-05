import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  // Protected routes with shared layout
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./shared/components/app-layout.component').then((m) => m.AppLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'workout/create',
        loadComponent: () =>
          import('./features/workout-administration/workout-create.component').then(
            (m) => m.WorkoutCreateComponent,
          ),
      },
    ],
  },

  // Wildcard route - should be last
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];
