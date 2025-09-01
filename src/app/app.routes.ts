import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  // Default route redirect to login
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },

  // Lazy loaded authentication module
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  // Protected routes (will add dashboard and other features later)
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then((m) => m.DashboardComponent),
  },

  // Wildcard route - should be last
  {
    path: '**',
    redirectTo: '/auth/login',
  },
];
