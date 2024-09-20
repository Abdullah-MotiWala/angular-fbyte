import { Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { PublicGuard } from './core/guard/public.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    canActivate: [PublicGuard],
    canActivateChild: [PublicGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./layout/layout.module').then((m) => m.LayoutModule),
  },
];
