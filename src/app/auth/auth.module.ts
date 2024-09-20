import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  providers: [AuthService],
})
export class AuthModule {}
