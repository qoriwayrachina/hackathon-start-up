import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./gemini/generate-text/generate-text.component')
      .then((m) => m.GenerateTextComponent)
  },
  {
    path: '**',
    redirectTo: '',
  }
];
