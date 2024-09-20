import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const PublicGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const storageService: LocalStorageService = inject(LocalStorageService);

  if (storageService.hasUserLoggedIn()) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
