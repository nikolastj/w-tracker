import {
  AuthApiService
} from "./chunk-K5LXL5BT.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-RDXPNGMW.js";
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
} from "./chunk-FWJQQGCN.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-4PVVSHJ5.js";
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
  __spreadProps,
  __spreadValues,
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

// src/app/auth/models/register-user.form.ts
var RegisterUserForm = class _RegisterUserForm extends FormGroup {
  constructor() {
    super({
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ]),
      bio: new FormControl(""),
      imageUrl: new FormControl(""),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6)
      ]),
      confirmPassword: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      registerCode: new FormControl("", Validators.required)
    }, { validators: _RegisterUserForm.passwordMatchValidator });
  }
  getSubmitValue() {
    const formValue = this.value;
    return {
      user: {
        firstName: formValue.firstName || "",
        lastName: formValue.lastName || "",
        username: formValue.username || "",
        bio: formValue.bio || "",
        password: formValue.password || "",
        email: formValue.email || "",
        registerCode: formValue.registerCode || ""
      }
    };
  }
  static passwordMatchValidator = (control) => {
    const form = control;
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      if (confirmPassword?.hasError("passwordMismatch")) {
        confirmPassword.setErrors(null);
      }
      return null;
    }
  };
};

// src/app/auth/components/register.component.ts
function RegisterComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Register code is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " First name is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Last name is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Username is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Username must be at least 3 characters long ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password is required ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Password must be at least 6 characters long ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please confirm your password ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_error_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_mat_spinner_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 23);
  }
}
function RegisterComponent_span_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Create Account");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  authStateService = inject(AuthStateService);
  authApiService = inject(AuthApiService);
  router = inject(Router);
  destroy$ = new Subject();
  hidePassword = true;
  hideConfirmPassword = true;
  isLoading = false;
  registerForm = new RegisterUserForm();
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSubmit() {
    if (this.registerForm.valid && !this.isLoading) {
      this.isLoading = true;
      const registerData = this.registerForm.getSubmitValue();
      this.authApiService.register(registerData).pipe(tap((response) => {
        if (response.token) {
          this.authStateService.setAuthState(__spreadProps(__spreadValues({}, response.user), {
            token: response.token
          }));
        }
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
  static \u0275fac = function RegisterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], decls: 78, vars: 23, consts: [[1, "flex", "w-full", "max-w-md", "flex-col", "gap-8"], [1, "auth-heading", "mt-6", "text-center", "text-3xl", "font-extrabold"], [1, "auth-text", "mt-2", "text-center", "text-sm"], ["routerLink", "/auth/login", 1, "font-medium", "text-indigo-600", "hover:text-indigo-500"], [1, "auth-card", "p-6"], [1, "flex", "flex-col", "gap-4", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "registerCode", "placeholder", "Enter registration code", "autocomplete", "off"], ["matSuffix", ""], [4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4"], ["appearance", "outline"], ["matInput", "", "formControlName", "firstName", "placeholder", "First name", "autocomplete", "given-name"], ["matInput", "", "formControlName", "lastName", "placeholder", "Last name", "autocomplete", "family-name"], ["matInput", "", "formControlName", "username", "placeholder", "Choose a username", "autocomplete", "username"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Enter your email", "autocomplete", "email"], ["matInput", "", "formControlName", "bio", "placeholder", "Tell us about yourself", "rows", "3"], ["matInput", "", "formControlName", "password", "placeholder", "Choose a password", "autocomplete", "new-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "placeholder", "Confirm your password", "autocomplete", "new-password", 3, "type"], [1, "pt-4"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "w-full", 3, "disabled"], ["diameter", "20", "class", "mr-2", 4, "ngIf"], ["diameter", "20", 1, "mr-2"]], template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3, "Create your account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " Or ");
      \u0275\u0275elementStart(6, "a", 3);
      \u0275\u0275text(7, " sign in to your existing account ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "mat-card", 4)(9, "form", 5);
      \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(10, "div")(11, "mat-form-field", 6)(12, "mat-label");
      \u0275\u0275text(13, "Register Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 7);
      \u0275\u0275elementStart(15, "mat-icon", 8);
      \u0275\u0275text(16, "vpn_key");
      \u0275\u0275elementEnd();
      \u0275\u0275template(17, RegisterComponent_mat_error_17_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 10)(19, "mat-form-field", 11)(20, "mat-label");
      \u0275\u0275text(21, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 12);
      \u0275\u0275template(23, RegisterComponent_mat_error_23_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "mat-form-field", 11)(25, "mat-label");
      \u0275\u0275text(26, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 13);
      \u0275\u0275template(28, RegisterComponent_mat_error_28_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div")(30, "mat-form-field", 6)(31, "mat-label");
      \u0275\u0275text(32, "Username");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 14);
      \u0275\u0275elementStart(34, "mat-icon", 8);
      \u0275\u0275text(35, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275template(36, RegisterComponent_mat_error_36_Template, 2, 0, "mat-error", 9)(37, RegisterComponent_mat_error_37_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "div")(39, "mat-form-field", 6)(40, "mat-label");
      \u0275\u0275text(41, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 15);
      \u0275\u0275elementStart(43, "mat-icon", 8);
      \u0275\u0275text(44, "email");
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, RegisterComponent_mat_error_45_Template, 2, 0, "mat-error", 9)(46, RegisterComponent_mat_error_46_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div")(48, "mat-form-field", 6)(49, "mat-label");
      \u0275\u0275text(50, "Bio");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "textarea", 16);
      \u0275\u0275elementStart(52, "mat-icon", 8);
      \u0275\u0275text(53, "description");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "div")(55, "mat-form-field", 6)(56, "mat-label");
      \u0275\u0275text(57, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 17);
      \u0275\u0275elementStart(59, "button", 18);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_59_listener() {
        return ctx.hidePassword = !ctx.hidePassword;
      });
      \u0275\u0275elementStart(60, "mat-icon");
      \u0275\u0275text(61);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(62, RegisterComponent_mat_error_62_Template, 2, 0, "mat-error", 9)(63, RegisterComponent_mat_error_63_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div")(65, "mat-form-field", 6)(66, "mat-label");
      \u0275\u0275text(67, "Confirm Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 19);
      \u0275\u0275elementStart(69, "button", 18);
      \u0275\u0275listener("click", function RegisterComponent_Template_button_click_69_listener() {
        return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
      });
      \u0275\u0275elementStart(70, "mat-icon");
      \u0275\u0275text(71);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(72, RegisterComponent_mat_error_72_Template, 2, 0, "mat-error", 9)(73, RegisterComponent_mat_error_73_Template, 2, 0, "mat-error", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(74, "div", 20)(75, "button", 21);
      \u0275\u0275template(76, RegisterComponent_mat_spinner_76_Template, 1, 0, "mat-spinner", 22)(77, RegisterComponent_span_77_Template, 2, 0, "span", 9);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_12_0;
      let tmp_13_0;
      let tmp_18_0;
      let tmp_19_0;
      \u0275\u0275advance(9);
      \u0275\u0275property("formGroup", ctx.registerForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", (tmp_1_0 = ctx.registerForm.get("registerCode")) == null ? null : tmp_1_0.hasError("required"));
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_2_0 = ctx.registerForm.get("firstName")) == null ? null : tmp_2_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.registerForm.get("lastName")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.registerForm.get("username")) == null ? null : tmp_4_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.registerForm.get("username")) == null ? null : tmp_5_0.hasError("minlength"));
      \u0275\u0275advance(8);
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.registerForm.get("email")) == null ? null : tmp_6_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_7_0 = ctx.registerForm.get("email")) == null ? null : tmp_7_0.hasError("email"));
      \u0275\u0275advance(12);
      \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", "Hide password")("aria-pressed", ctx.hidePassword);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_12_0 = ctx.registerForm.get("password")) == null ? null : tmp_12_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_13_0 = ctx.registerForm.get("password")) == null ? null : tmp_13_0.hasError("minlength"));
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.hideConfirmPassword ? "password" : "text");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", "Hide password")("aria-pressed", ctx.hideConfirmPassword);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.hideConfirmPassword ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_18_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_18_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_19_0 = ctx.registerForm.get("confirmPassword")) == null ? null : tmp_19_0.hasError("passwordMismatch"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.registerForm.invalid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, MatCardModule, MatCard, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.auth-background[_ngcontent-%COMP%] {\n  background-color: light-dark(#f9fafb, #111827);\n}\n.auth-card[_ngcontent-%COMP%] {\n  background-color: light-dark(#ffffff, #1f2937);\n  box-shadow: light-dark(0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.5));\n}\n.auth-heading[_ngcontent-%COMP%] {\n  color: light-dark(#111827, #f9fafb);\n}\n.auth-text[_ngcontent-%COMP%] {\n  color: light-dark(#6b7280, #d1d5db);\n}\n/*# sourceMappingURL=auth-TXSIPCSH.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterComponent, [{
    type: Component,
    args: [{ selector: "app-register", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule
    ], template: `
    <div class="flex w-full max-w-md flex-col gap-8">
      <div>
        <h2 class="auth-heading mt-6 text-center text-3xl font-extrabold">Create your account</h2>
        <p class="auth-text mt-2 text-center text-sm">
          Or
          <a routerLink="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            sign in to your existing account
          </a>
        </p>
      </div>

      <mat-card class="auth-card p-6">
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Register Code</mat-label>
              <input
                matInput
                formControlName="registerCode"
                placeholder="Enter registration code"
                autocomplete="off"
              />
              <mat-icon matSuffix>vpn_key</mat-icon>
              <mat-error *ngIf="registerForm.get('registerCode')?.hasError('required')">
                Register code is required
              </mat-error>
            </mat-form-field>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <mat-form-field appearance="outline">
              <mat-label>First Name</mat-label>
              <input
                matInput
                formControlName="firstName"
                placeholder="First name"
                autocomplete="given-name"
              />
              <mat-error *ngIf="registerForm.get('firstName')?.hasError('required')">
                First name is required
              </mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Last Name</mat-label>
              <input
                matInput
                formControlName="lastName"
                placeholder="Last name"
                autocomplete="family-name"
              />
              <mat-error *ngIf="registerForm.get('lastName')?.hasError('required')">
                Last name is required
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Username</mat-label>
              <input
                matInput
                formControlName="username"
                placeholder="Choose a username"
                autocomplete="username"
              />
              <mat-icon matSuffix>person</mat-icon>
              <mat-error *ngIf="registerForm.get('username')?.hasError('required')">
                Username is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('username')?.hasError('minlength')">
                Username must be at least 3 characters long
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Email</mat-label>
              <input
                matInput
                type="email"
                formControlName="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
              <mat-icon matSuffix>email</mat-icon>
              <mat-error *ngIf="registerForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('email')?.hasError('email')">
                Please enter a valid email address
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Bio</mat-label>
              <textarea
                matInput
                formControlName="bio"
                placeholder="Tell us about yourself"
                rows="3"
              ></textarea>
              <mat-icon matSuffix>description</mat-icon>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Password</mat-label>
              <input
                matInput
                [type]="hidePassword ? 'password' : 'text'"
                formControlName="password"
                placeholder="Choose a password"
                autocomplete="new-password"
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
              <mat-error *ngIf="registerForm.get('password')?.hasError('required')">
                Password is required
              </mat-error>
              <mat-error *ngIf="registerForm.get('password')?.hasError('minlength')">
                Password must be at least 6 characters long
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Confirm Password</mat-label>
              <input
                matInput
                [type]="hideConfirmPassword ? 'password' : 'text'"
                formControlName="confirmPassword"
                placeholder="Confirm your password"
                autocomplete="new-password"
              />
              <button
                mat-icon-button
                matSuffix
                (click)="hideConfirmPassword = !hideConfirmPassword"
                [attr.aria-label]="'Hide password'"
                [attr.aria-pressed]="hideConfirmPassword"
                type="button"
              >
                <mat-icon>{{ hideConfirmPassword ? 'visibility_off' : 'visibility' }}</mat-icon>
              </button>
              <mat-error *ngIf="registerForm.get('confirmPassword')?.hasError('required')">
                Please confirm your password
              </mat-error>
              <mat-error *ngIf="registerForm.get('confirmPassword')?.hasError('passwordMismatch')">
                Passwords do not match
              </mat-error>
            </mat-form-field>
          </div>

          <div class="pt-4">
            <button
              mat-raised-button
              color="primary"
              type="submit"
              class="w-full"
              [disabled]="registerForm.invalid || isLoading"
            >
              <mat-spinner *ngIf="isLoading" diameter="20" class="mr-2"></mat-spinner>
              <span *ngIf="!isLoading">Create Account</span>
            </button>
          </div>
        </form>
      </mat-card>
    </div>
  `, styles: ["/* src/app/auth/auth.scss */\n.auth-background {\n  background-color: light-dark(#f9fafb, #111827);\n}\n.auth-card {\n  background-color: light-dark(#ffffff, #1f2937);\n  box-shadow: light-dark(0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.5));\n}\n.auth-heading {\n  color: light-dark(#111827, #f9fafb);\n}\n.auth-text {\n  color: light-dark(#6b7280, #d1d5db);\n}\n/*# sourceMappingURL=auth-TXSIPCSH.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src/app/auth/components/register.component.ts", lineNumber: 218 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=register.component-BE3VUZNE.js.map
