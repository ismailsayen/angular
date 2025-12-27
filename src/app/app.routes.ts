import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then((m) => m.Home) },
  {
    path: 'counter',
    loadComponent: () => import('./components/greeting/greeting').then((m) => m.Greeting),
  },
];
