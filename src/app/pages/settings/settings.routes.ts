import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: 'account',
    title: 'Account settings',
    loadComponent: async () => (await import('./account/account.page')).AccountPage,
  },
  {
    path: 'history',
    title: 'History settings',
    loadComponent: async () => (await import('./history/history.page')).HistoryPage,
  },
  {
    path: 'checkin',
    title: 'Checkin settings',
    loadComponent: async () => (await import('./checkin/checkin.page')).CheckinPage,
  },
];
