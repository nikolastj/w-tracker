import {
  MatCardModule,
  authInterceptor,
  environment
} from "./chunk-4PVVSHJ5.js";
import {
  MatToolbarModule
} from "./chunk-RFCUSCJT.js";
import {
  AuthStateService
} from "./chunk-XS6NRLYF.js";
import {
  ColorSchemeService,
  MatButtonModule,
  MatIconModule
} from "./chunk-72WFIQJ2.js";
import {
  Component,
  Injectable,
  Router,
  RouterOutlet,
  bootstrapApplication,
  inject,
  map,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement
} from "./chunk-A6P2MOB3.js";

// src/app/auth/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  authStateService = inject(AuthStateService);
  router = inject(Router);
  canActivate() {
    return this.authStateService.authState$.pipe(map((authState) => {
      if (authState.isAuthenticated) {
        return true;
      } else {
        return this.router.createUrlTree(["/auth/login"]);
      }
    }));
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import("./auth.module-XKKAEE4A.js").then((m) => m.AuthModule)
  },
  // Protected routes with shared layout
  {
    path: "",
    canActivate: [AuthGuard],
    loadComponent: () => import("./app-layout.component-6QQ3MHAV.js").then((m) => m.AppLayoutComponent),
    children: [
      {
        path: "dashboard",
        loadComponent: () => import("./dashboard.component-AORQQO6K.js").then((m) => m.DashboardComponent)
      },
      {
        path: "workout",
        loadChildren: () => import("./workout-administration-HJJVDL5C.js").then((m) => m.workoutAdministrationRoutes)
      }
    ]
  },
  // Wildcard route - should be last
  {
    path: "**",
    redirectTo: "/dashboard"
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAppInitializer(() => {
      inject(ColorSchemeService);
    })
  ]
};

// src/app/app.ts
var App = class _App {
  title = signal("w-tracker", ...ngDevMode ? [{ debugName: "title" }] : []);
  router = inject(Router);
  constructor() {
    this.handleGitHubPagesRedirect();
  }
  handleGitHubPagesRedirect() {
    const redirectPath = sessionStorage.getItem("github-pages-redirect");
    if (redirectPath) {
      sessionStorage.removeItem("github-pages-redirect");
      setTimeout(() => {
        const cleanedRedirectPath = redirectPath.replace(environment.href, "");
        this.router.navigateByUrl(cleanedRedirectPath);
      }, 0);
    }
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, RouterOutlet], template: "<router-outlet></router-outlet>\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main-GMLU5HT3.js.map
