import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthStateService } from '../services/auth-state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private authStateService = inject(AuthStateService);
  private router = inject(Router);

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStateService.authState$.pipe(
      map((authState) => {
        if (authState.isAuthenticated) {
          return true;
        } else {
          return this.router.createUrlTree(['/auth/login']);
        }
      }),
    );
  }
}
