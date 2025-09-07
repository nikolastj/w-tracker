import {
  MatDivider,
  MatDividerModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  PublicHeaderComponent
} from "./chunk-H3TPSBW7.js";
import {
  MatToolbar,
  MatToolbarModule
} from "./chunk-RFCUSCJT.js";
import {
  AuthStateService
} from "./chunk-XS6NRLYF.js";
import {
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-72WFIQJ2.js";
import {
  AsyncPipe,
  CommonModule,
  Component,
  NgIf,
  Router,
  RouterModule,
  RouterOutlet,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-A6P2MOB3.js";

// src/app/shared/components/app-header.component.ts
function AppHeaderComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r2 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", user_r2.firstName, " ", user_r2.lastName, " ");
  }
}
function AppHeaderComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx.ngIf;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r3.email, " ");
  }
}
var AppHeaderComponent = class _AppHeaderComponent extends PublicHeaderComponent {
  authStateService = inject(AuthStateService);
  router = inject(Router);
  currentUser$;
  constructor() {
    super();
    this.currentUser$ = this.authStateService.authState$.pipe(map((authState) => authState.user));
  }
  logout() {
    this.authStateService.clearAuthState();
    this.router.navigate(["/auth/login"]);
  }
  static \u0275fac = function AppHeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppHeaderComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppHeaderComponent, selectors: [["app-header"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 28, vars: 13, consts: [["userMenu", "matMenu"], [1, "header-container"], ["color", "primary", 1, "shadow-sm"], [1, "header-title", "flex-1"], [1, "header-actions"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "border-b", "px-4", "py-2"], ["class", "dashboard-heading text-sm font-medium", 4, "ngIf"], ["class", "dashboard-text text-xs", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "dashboard-heading", "text-sm", "font-medium"], [1, "dashboard-text", "text-xs"]], template: function AppHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "mat-toolbar", 2)(2, "span", 3);
      \u0275\u0275text(3, "Workout-Tracker");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "button", 5)(6, "mat-icon");
      \u0275\u0275text(7, "account_circle");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "mat-menu", null, 0)(10, "div", 6);
      \u0275\u0275template(11, AppHeaderComponent_p_11_Template, 2, 2, "p", 7);
      \u0275\u0275pipe(12, "async");
      \u0275\u0275template(13, AppHeaderComponent_p_13_Template, 2, 1, "p", 8);
      \u0275\u0275pipe(14, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 9);
      \u0275\u0275listener("click", function AppHeaderComponent_Template_button_click_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleTheme());
      });
      \u0275\u0275elementStart(16, "mat-icon");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "async");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "async");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "mat-divider");
      \u0275\u0275elementStart(23, "button", 9);
      \u0275\u0275listener("click", function AppHeaderComponent_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275elementStart(24, "mat-icon");
      \u0275\u0275text(25, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span");
      \u0275\u0275text(27, "Logout");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const userMenu_r4 = \u0275\u0275reference(9);
      \u0275\u0275advance(5);
      \u0275\u0275property("matMenuTriggerFor", userMenu_r4);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 5, ctx.currentUser$));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 7, ctx.currentUser$));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 9, ctx.currentTheme$) === "dark" ? "light_mode" : "dark_mode");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 11, ctx.currentTheme$) === "dark" ? "Light Mode" : "Dark Mode");
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    RouterModule,
    MatToolbarModule,
    MatToolbar,
    MatButtonModule,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatMenuModule,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatDividerModule,
    MatDivider,
    AsyncPipe
  ], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.header-container[_ngcontent-%COMP%] {\n  position: relative;\n}\nmat-toolbar[_ngcontent-%COMP%] {\n  z-index: 10;\n  transition: height 0.3s ease;\n}\n@media (max-width: 768px) {\n  mat-toolbar[_ngcontent-%COMP%] {\n    height: 0;\n    min-height: 0;\n    padding: 0;\n    overflow: visible;\n  }\n}\n@media (max-width: 768px) {\n  .header-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .header-actions[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 16px;\n    right: 16px;\n    z-index: 1000;\n    background: var(--mat-toolbar-container-background-color, #1976d2);\n    border-radius: 50%;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  }\n}\n/*# sourceMappingURL=shared-header.component-I72ZXKND.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-header", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatDividerModule
    ], template: `
    <div class="header-container">
      <mat-toolbar color="primary" class="shadow-sm">
        <span class="header-title flex-1">Workout-Tracker</span>

        <div class="header-actions">
          <button mat-icon-button [matMenuTriggerFor]="userMenu">
            <mat-icon>account_circle</mat-icon>
          </button>
        </div>

        <mat-menu #userMenu="matMenu">
          <div class="border-b px-4 py-2">
            <p class="dashboard-heading text-sm font-medium" *ngIf="currentUser$ | async as user">
              {{ user.firstName }} {{ user.lastName }}
            </p>
            <p class="dashboard-text text-xs" *ngIf="currentUser$ | async as user">
              {{ user.email }}
            </p>
          </div>
          <button mat-menu-item (click)="toggleTheme()">
            <mat-icon>{{
              (currentTheme$ | async) === 'dark' ? 'light_mode' : 'dark_mode'
            }}</mat-icon>
            <span>{{ (currentTheme$ | async) === 'dark' ? 'Light Mode' : 'Dark Mode' }}</span>
          </button>
          <mat-divider></mat-divider>
          <button mat-menu-item (click)="logout()">
            <mat-icon>logout</mat-icon>
            <span>Logout</span>
          </button>
        </mat-menu>
      </mat-toolbar>
    </div>
  `, styles: ["/* src/app/shared/components/shared-header.component.scss */\n:host {\n  display: block;\n}\n.header-container {\n  position: relative;\n}\nmat-toolbar {\n  z-index: 10;\n  transition: height 0.3s ease;\n}\n@media (max-width: 768px) {\n  mat-toolbar {\n    height: 0;\n    min-height: 0;\n    padding: 0;\n    overflow: visible;\n  }\n}\n@media (max-width: 768px) {\n  .header-title {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .header-actions {\n    position: fixed;\n    top: 16px;\n    right: 16px;\n    z-index: 1000;\n    background: var(--mat-toolbar-container-background-color, #1976d2);\n    border-radius: 50%;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  }\n}\n/*# sourceMappingURL=shared-header.component-I72ZXKND.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppHeaderComponent, { className: "AppHeaderComponent", filePath: "src/app/shared/components/app-header.component.ts", lineNumber: 64 });
})();

// src/app/shared/components/app-layout.component.ts
var AppLayoutComponent = class _AppLayoutComponent {
  static \u0275fac = function AppLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayoutComponent, selectors: [["app-layout"]], decls: 4, vars: 0, consts: [[1, "dashboard-background", "flex", "h-screen", "flex-col"], [1, "flex-1", "overflow-y-auto"]], template: function AppLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-header");
      \u0275\u0275elementStart(2, "div", 1);
      \u0275\u0275element(3, "router-outlet");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [CommonModule, RouterOutlet, AppHeaderComponent], styles: ["\n\n@media (max-width: 768px) {\n  app-header[_ngcontent-%COMP%], \n   app-public-header[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    height: 0;\n  }\n  .flex-1[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=shared-layout.component-RM6EXWAG.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-layout", standalone: true, imports: [CommonModule, RouterOutlet, AppHeaderComponent], template: `
    <div class="dashboard-background flex h-screen flex-col">
      <app-header></app-header>
      <div class="flex-1 overflow-y-auto">
        <router-outlet></router-outlet>
      </div>
    </div>
  `, styles: ["/* src/app/shared/components/shared-layout.component.scss */\n@media (max-width: 768px) {\n  app-header,\n  app-public-header {\n    flex-shrink: 0;\n    height: 0;\n  }\n  .flex-1 {\n    height: 100vh;\n  }\n}\n/*# sourceMappingURL=shared-layout.component-RM6EXWAG.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayoutComponent, { className: "AppLayoutComponent", filePath: "src/app/shared/components/app-layout.component.ts", lineNumber: 21 });
})();

export {
  AppLayoutComponent
};
//# sourceMappingURL=chunk-Z234J6D4.js.map
