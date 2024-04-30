import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'advisor-view'
  },
  {
    path: 'advisor-view',
    pathMatch: 'full',
    loadComponent: () => import('./advisor-view/advisor-view.component')
      .then((m) => m.AdvisorViewComponent)
  },
  {
    path: 'sales-view',
    pathMatch: 'full',
    loadComponent: () => import('./sales-view/sales-view.component')
      .then((m) => m.SalesViewComponent)
  },
  {
    path: '**',
    redirectTo: '',
  }
];
