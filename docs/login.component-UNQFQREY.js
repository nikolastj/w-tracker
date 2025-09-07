import {
  AuthApiService
} from "./chunk-7M26THFH.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-HRP3JQHP.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatLabel,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-ZGZQONXF.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-YRE5AERI.js";
import {
  AuthStateService
} from "./chunk-XS6NRLYF.js";
import "./chunk-I2RYTFIL.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconButton,
  MatIconModule
} from "./chunk-72WFIQJ2.js";
import {
  CommonModule,
  Component,
  NgIf,
  Router,
  RouterLink,
  RouterModule,
  Subject,
  inject,
  setClassMetadata,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A6P2MOB3.js";

// src/app/auth/models/login-user.form.ts
var LoginUserForm = class extends FormGroup {
  constructor() {
    super({
      username: new FormControl("", Validators.required),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }
  getSubmitValue() {
    const formValue = this.value;
    return {
      username: formValue.username || "",
      password: formValue.password || ""
    };
  }
};

// src/app/auth/components/login.component.ts
function LoginComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_error_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be at least 6 characters long ");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_mat_spinner_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 17);
  }
}
function LoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Sign In");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  authStateService = inject(AuthStateService);
  authApiService = inject(AuthApiService);
  router = inject(Router);
  destroy$ = new Subject();
  hidePassword = true;
  isLoading = false;
  loginForm = new LoginUserForm();
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSubmit() {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;
      const credentials = this.loginForm.getSubmitValue();
      this.authApiService.login(credentials).pipe(tap((response) => {
        this.authStateService.setAuthState(response);
      }), takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.isLoading = false;
          this.router.navigate(["/dashboard"]);
        },
        error: () => {
          this.isLoading = false;
        }
      });
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 36, vars: 11, consts: [[1, "w-full", "max-w-md", "space-y-8"], [1, "auth-heading", "mt-6", "text-center", "text-3xl", "font-extrabold"], [1, "auth-text", "mt-2", "text-center", "text-sm"], ["routerLink", "/auth/register", 1, "font-medium", "text-indigo-600", "hover:text-indigo-500"], [1, "auth-card", "p-6"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "username", "placeholder", "Enter your username", "autocomplete", "username"], ["matSuffix", ""], [4, "ngIf"], ["matInput", "", "formControlName", "password", "placeholder", "Enter your password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "text-sm"], ["routerLink", "/auth/forgot-password", 1, "font-medium", "text-indigo-600", "hover:text-indigo-500"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "w-full", 3, "disabled"], ["diameter", "20", "class", "mr-2", 4, "ngIf"], ["diameter", "20", 1, "mr-2"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3, " Sign in to your account ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " Or ");
      \u0275\u0275elementStart(6, "a", 3);
      \u0275\u0275text(7, " create a new account ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "mat-card", 4)(9, "form", 5);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div")(11, "mat-form-field", 6)(12, "mat-label");
      \u0275\u0275text(13, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 7);
      \u0275\u0275elementStart(15, "mat-icon", 8);
      \u0275\u0275text(16, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, LoginComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div")(19, "mat-form-field", 6)(20, "mat-label");
      \u0275\u0275text(21, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 10);
      \u0275\u0275elementStart(23, "button", 11);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_23_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementStart(24, "mat-icon");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(26, LoginComponent_mat_error_26_Template, 2, 0, "mat-error", 9)(27, LoginComponent_mat_error_27_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 12)(29, "div", 13)(30, "a", 14);
      \u0275\u0275text(31, " Forgot your password? ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div")(33, "button", 15);
      \u0275\u0275template(34, LoginComponent_mat_spinner_34_Template, 1, 0, "mat-spinner", 16)(35, LoginComponent_span_35_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_6_0;
      let tmp_7_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", (tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.loginForm.get("password")) == null ? null : tmp_6_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.loginForm.get("password")) == null ? null : tmp_7_0.hasError("minlength"));
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.loginForm.invalid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, MatCardModule, MatCard, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{
      selector: "app-login",
      standalone: true,
      imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule
      ],
      template: `
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="auth-heading mt-6 text-center text-3xl font-extrabold">
          Sign in to your account
        </h2>
        <p class="auth-text mt-2 text-center text-sm">
          Or
          <a routerLink="/auth/register" class="font-medium text-indigo-600 hover:text-indigo-500">
            create a new account
          </a>
        </p>
      </div>

      <mat-card class="auth-card p-6">
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Username</mat-label>
              <input
                matInput
                formControlName="username"
                placeholder="Enter your username"
                autocomplete="username"
              />
              <mat-icon matSuffix>person</mat-icon>
              <mat-error *ngIf="loginForm.get('username')?.hasError('required')">
                Username is required
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Password</mat-label>
              <input
                matInput
                [type]="hidePassword ? 'password' : 'text'"
                formControlName="password"
                placeholder="Enter your password"
                autocomplete="current-password"
              />
              <button
                mat-icon-button
                matSuffix
                (click)="hidePassword = !hidePassword"
                [attr.aria-label]="'Hide password'"
                [attr.aria-pressed]="hidePassword"
                type="button"
              >
                <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              <mat-error *ngIf="loginForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
              <mat-error *ngIf="loginForm.get('password')?.hasError('minlength')">
                Password must be at least 6 characters long
              </mat-error>
            </mat-form-field>
          </div>

          <div class="flex items-center justify-between">
            <div class="text-sm">
              <a
                routerLink="/auth/forgot-password"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              mat-raised-button
              color="primary"
              type="submit"
              class="w-full"
              [disabled]="loginForm.invalid || isLoading"
            >
              <mat-spinner *ngIf="isLoading" diameter="20" class="mr-2"></mat-spinner>
              <span *ngIf="!isLoading">Sign In</span>
            </button>
          </div>
        </form>
      </mat-card>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/components/login.component.ts", lineNumber: 121 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-UNQFQREY.js.map
