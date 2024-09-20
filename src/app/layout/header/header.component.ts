import { Component } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { ILoginResponse } from '../../auth/auth.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user: ILoginResponse | undefined;
  constructor(private localStorageService: LocalStorageService) {
    this.user = this.localStorageService.getUser();
  }
}
