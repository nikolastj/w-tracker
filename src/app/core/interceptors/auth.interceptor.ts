import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Functional HTTP interceptor that adds Authorization header to requests
 * Uses the newest Angular patterns (functional interceptors)
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Get current token from localStorage
  const token = localStorage.getItem('auth_token');

  // Skip adding auth header for auth endpoints to avoid conflicts
  const isAuthEndpoint = req.url.includes('/login') || req.url.includes('/forgot-password');

  // Add Authorization header if user is authenticated and not auth endpoint
  if (token && !isAuthEndpoint) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Token ${token}`,
      },
    });

    return next(authReq);
  }

  // Pass through without modification
  return next(req);
};
