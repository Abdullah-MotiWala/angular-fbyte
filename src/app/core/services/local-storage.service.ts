import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ILoginResponse } from '../../auth/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  storageKeys = {
    user: '__u__',
    token: '__t__',
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(payload: ILoginResponse) {
    if (this.isBrowser()) {
      localStorage.setItem(
        this.storageKeys.user,
        btoa(JSON.stringify(payload))
      );
      localStorage.setItem(this.storageKeys.token, btoa(payload.token));
    }
  }

  getUser(): ILoginResponse | undefined {
    if (this.isBrowser()) {
      const u = localStorage.getItem(this.storageKeys.user);
      try {
        if (!u) {
          return undefined;
        }
        return JSON.parse(atob(u));
      } catch {
        return undefined;
      }
    }
    return undefined;
  }

  hasUserLoggedIn(): boolean {
    const user = this.getUser();
    return !!user;
  }
}
