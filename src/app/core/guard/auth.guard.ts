import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const storageService: LocalStorageService = inject(LocalStorageService);

  if (storageService.hasUserLoggedIn()) {
    return true;
  }
  router.navigate(['/auth']);
  return false;
};
