import {
  NgModule,
  RouterModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-A6P2MOB3.js";

// src/app/auth/auth.routes.ts
var authRoutes = [
  {
    path: "",
    loadComponent: () => import("./public-layout.component-IQLBUAS5.js").then((m) => m.PublicLayoutComponent),
    children: [
      {
        path: "login",
        loadComponent: () => import("./login.component-UNQFQREY.js").then((m) => m.LoginComponent)
      },
      {
        path: "register",
        loadComponent: () => import("./register.component-Q577NP2T.js").then((m) => m.RegisterComponent)
      },
      {
        path: "forgot-password",
        loadComponent: () => import("./forgot-password.component-BFZWIE6K.js").then((m) => m.ForgotPasswordComponent)
      }
    ]
  }
];

// src/app/auth/auth.module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild([{ path: "", children: authRoutes }]), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild([{ path: "", children: authRoutes }])],
      exports: [RouterModule]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=auth.module-W3ZJLKH6.js.map
