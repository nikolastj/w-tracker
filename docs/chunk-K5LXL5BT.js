import {
  NotificationService,
  handleNotifications
} from "./chunk-FWJQQGCN.js";
import {
  environment
} from "./chunk-4PVVSHJ5.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-A6P2MOB3.js";

// src/app/auth/services/auth-api.service.ts
var AuthApiService = class _AuthApiService {
  http;
  notificationService;
  API_URL = environment.apiUrl;
  constructor(http, notificationService) {
    this.http = http;
    this.notificationService = notificationService;
  }
  login(credentials) {
    return this.http.post(`${this.API_URL}/login`, credentials).pipe(handleNotifications({
      successMessage: "Login successful!",
      errorMessage: "Login failed. Please try again.",
      notificationService: this.notificationService
    }));
  }
  register(userData) {
    return this.http.post(`${this.API_URL}/users`, userData).pipe(handleNotifications({
      successMessage: "Account created successfully!",
      errorMessage: "Registration failed. Please try again.",
      notificationService: this.notificationService
    }));
  }
  requestPasswordReset(email) {
    return this.http.post(`${this.API_URL}/auth/forgot-password`, { email }).pipe(handleNotifications({
      successMessage: "Password reset email sent successfully!",
      errorMessage: "Failed to send reset email. Please try again.",
      notificationService: this.notificationService
    }));
  }
  validateToken(token) {
    return this.http.post(`${this.API_URL}/auth/validate`, { token });
  }
  refreshToken(refreshToken) {
    return this.http.post(`${this.API_URL}/auth/refresh`, { refreshToken });
  }
  static \u0275fac = function AuthApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthApiService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(NotificationService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthApiService, factory: _AuthApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: NotificationService }], null);
})();

export {
  AuthApiService
};
//# sourceMappingURL=chunk-K5LXL5BT.js.map
