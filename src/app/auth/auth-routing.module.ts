import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { PublicGuard } from '../core/guard/public.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [PublicGuard],
    canActivateChild: [PublicGuard],
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
