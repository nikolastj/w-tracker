import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-A6P2MOB3.js";

// src/app/auth/services/auth-state.service.ts
var AuthStateService = class _AuthStateService {
  authState = new BehaviorSubject({
    user: null,
    token: null,
    isAuthenticated: false
  });
  authState$ = this.authState.asObservable();
  constructor() {
    this.loadAuthFromStorage();
  }
  getCurrentAuthState() {
    return this.authState.value;
  }
  isAuthenticated() {
    return this.authState.value.isAuthenticated;
  }
  getCurrentUser() {
    return this.authState.value.user;
  }
  getToken() {
    return this.authState.value.token;
  }
  setAuthState(authData) {
    const newState = {
      user: {
        id: authData.id,
        username: authData.username,
        email: authData.email,
        firstName: authData.firstName || "",
        lastName: authData.lastName || "",
        bio: authData.bio || ""
      },
      token: authData.token,
      isAuthenticated: true
    };
    this.authState.next(newState);
    this.saveAuthToStorage(newState);
  }
  clearAuthState() {
    const emptyState = {
      user: null,
      token: null,
      isAuthenticated: false
    };
    this.authState.next(emptyState);
    this.removeAuthFromStorage();
  }
  saveAuthToStorage(authState) {
    if (authState.token) {
      localStorage.setItem("auth_token", authState.token);
    }
    if (authState.user) {
      localStorage.setItem("auth_user", JSON.stringify(authState.user));
    }
  }
  loadAuthFromStorage() {
    const token = localStorage.getItem("auth_token");
    const userJson = localStorage.getItem("auth_user");
    if (token && userJson) {
      try {
        const user = JSON.parse(userJson);
        this.authState.next({
          user,
          token,
          isAuthenticated: true
        });
      } catch (error) {
        console.error("Failed to parse stored user data:", error);
        this.clearAuthState();
      }
    }
  }
  removeAuthFromStorage() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
  }
  static \u0275fac = function AuthStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthStateService, factory: _AuthStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  AuthStateService
};
//# sourceMappingURL=chunk-XS6NRLYF.js.map
