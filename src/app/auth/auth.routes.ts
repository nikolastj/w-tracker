import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../shared/components/public-layout.component').then((m) => m.PublicLayoutComponent),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./components/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./components/forgot-password.component').then((m) => m.ForgotPasswordComponent),
      },
    ],
  },
];
