import { Routes } from '@angular/router';

import { ShellComponent } from './features/layout';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard').then(m => m.DashboardComponent),
        data: { title: 'Analytics', breadcrumb: ['Dashboards', 'Analytics'] },
      },
      {
        path: 'billing',
        loadComponent: () => import('./features/billing').then(m => m.BillingComponent),
        data: { title: 'Billing', breadcrumb: ['Account', 'Billing'] },
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/notifications').then(m => m.NotificationsComponent),
        data: { title: 'Notifications', breadcrumb: ['Pages', 'Notifications'] },
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/profile').then(m => m.ProfileComponent),
        data: { title: 'Profile Overview', breadcrumb: ['Pages', 'Profile Overview'] },
      },
      {
        path: 'automotive',
        loadComponent: () => import('./features/automotive').then(m => m.AutomotiveComponent),
        data: { title: 'Automotive', breadcrumb: ['Pages', 'Automotive'] },
      },
      {
        path: 'smart-home',
        loadComponent: () => import('./features/smart-home').then(m => m.SmartHomeComponent),
        data: { title: 'Smart Home', breadcrumb: ['Dashboards', 'Smart Home'] },
      },
    ],
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./features/auth').then(m => m.SignInComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./features/auth').then(m => m.SignUpComponent),
  },
  { path: '**', redirectTo: 'dashboard' },
];
