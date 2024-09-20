import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ILoginResponse } from '../auth.interface';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  loginForm!: FormGroup;
  isPasswordVisible: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: ILoginResponse) => {
          if (response) {
            this.localStorageService.login(response);
            this.router.navigate(['/product']);
          }
        },
        error: (error) => {
          console.error('Error getting post:', error);
        },
      });
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
    const passwordInput = document.getElementById(
      'password'
    ) as HTMLInputElement;
    passwordInput.type = this.isPasswordVisible ? 'text' : 'password';
  }
}
