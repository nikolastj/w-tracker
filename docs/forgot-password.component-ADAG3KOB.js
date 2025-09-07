import {
  AuthApiService
} from "./chunk-JGHXDDZG.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-I6GS4522.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatLabel,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSnackBar,
  MatSnackBarModule,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-X7YEJBQC.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-4PVVSHJ5.js";
import "./chunk-I2RYTFIL.js";
import {
  MatButton,
  MatButtonModule,
  MatIcon,
  MatIconModule
} from "./chunk-72WFIQJ2.js";
import {
  CommonModule,
  Component,
  NgIf,
  RouterLink,
  RouterModule,
  Subject,
  inject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A6P2MOB3.js";

// src/app/auth/components/forgot-password.component.ts
function ForgotPasswordComponent_mat_card_6_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_mat_card_6_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function ForgotPasswordComponent_mat_card_6_mat_spinner_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function ForgotPasswordComponent_mat_card_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 5)(1, "form", 6);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_mat_card_6_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div")(3, "mat-form-field", 7)(4, "mat-label");
    \u0275\u0275text(5, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 8);
    \u0275\u0275elementStart(7, "mat-icon", 9);
    \u0275\u0275text(8, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ForgotPasswordComponent_mat_card_6_mat_error_9_Template, 2, 0, "mat-error", 10)(10, ForgotPasswordComponent_mat_card_6_mat_error_10_Template, 2, 0, "mat-error", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div")(12, "button", 11);
    \u0275\u0275template(13, ForgotPasswordComponent_mat_card_6_mat_spinner_13_Template, 1, 0, "mat-spinner", 12);
    \u0275\u0275text(14, " Send Reset Link ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 13)(16, "a", 14);
    \u0275\u0275text(17, " Back to sign in ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.forgotPasswordForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", (tmp_2_0 = ctx_r1.forgotPasswordForm.get("email")) == null ? null : tmp_2_0.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = ctx_r1.forgotPasswordForm.get("email")) == null ? null : tmp_3_0.hasError("email"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.forgotPasswordForm.invalid || ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
function ForgotPasswordComponent_mat_card_7_mat_spinner_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 15);
  }
}
function ForgotPasswordComponent_mat_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 16)(1, "div", 17)(2, "mat-icon", 18);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 19);
    \u0275\u0275text(5, "Reset link sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 20);
    \u0275\u0275text(7, " We've sent a password reset link to ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ". Please check your email and follow the instructions to reset your password. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 21)(12, "button", 22);
    \u0275\u0275listener("click", function ForgotPasswordComponent_mat_card_7_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resendEmail());
    });
    \u0275\u0275template(13, ForgotPasswordComponent_mat_card_7_mat_spinner_13_Template, 1, 0, "mat-spinner", 12);
    \u0275\u0275text(14, " Resend Email ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "a", 14);
    \u0275\u0275text(17, " Back to sign in ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.submittedEmail);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.isLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoading);
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  fb = inject(FormBuilder);
  authApiService = inject(AuthApiService);
  snackBar = inject(MatSnackBar);
  destroy$ = new Subject();
  isLoading = false;
  emailSent = false;
  submittedEmail = "";
  forgotPasswordForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]]
  });
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid && !this.isLoading) {
      this.submitResetRequest();
    }
  }
  resendEmail() {
    if (!this.isLoading) {
      this.submitResetRequest();
    }
  }
  submitResetRequest() {
    this.isLoading = true;
    const email = this.forgotPasswordForm.get("email")?.value || this.submittedEmail;
    this.authApiService.requestPasswordReset(email).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.isLoading = false;
        this.emailSent = true;
        this.submittedEmail = email;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 8, vars: 2, consts: [[1, "w-full", "max-w-md", "space-y-8"], [1, "auth-heading", "mt-6", "text-center", "text-3xl", "font-extrabold"], [1, "auth-text", "mt-2", "text-center", "text-sm"], ["class", "auth-card p-6", 4, "ngIf"], ["class", "auth-card p-6 text-center", 4, "ngIf"], [1, "auth-card", "p-6"], [1, "space-y-6", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "Enter your email address", "autocomplete", "email"], ["matSuffix", ""], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "w-full", 3, "disabled"], ["diameter", "20", "class", "mr-2", 4, "ngIf"], [1, "text-center"], ["routerLink", "/auth/login", 1, "font-medium", "text-indigo-600", "hover:text-indigo-500"], ["diameter", "20", 1, "mr-2"], [1, "auth-card", "p-6", "text-center"], [1, "mb-4"], [1, "text-6xl", "text-green-500"], [1, "auth-heading", "mb-2", "text-lg", "font-medium"], [1, "auth-text", "mb-6", "text-sm"], [1, "space-y-3"], ["mat-raised-button", "", "color", "primary", 1, "w-full", 3, "click", "disabled"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h2", 1);
      \u0275\u0275text(3, "Reset your password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, " Enter your email address and we'll send you a link to reset your password. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(6, ForgotPasswordComponent_mat_card_6_Template, 18, 5, "mat-card", 3)(7, ForgotPasswordComponent_mat_card_7_Template, 18, 3, "mat-card", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", !ctx.emailSent);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.emailSent);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterModule, RouterLink, MatCardModule, MatCard, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{
      selector: "app-forgot-password",
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
        MatProgressSpinnerModule,
        MatSnackBarModule
      ],
      template: `
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="auth-heading mt-6 text-center text-3xl font-extrabold">Reset your password</h2>
        <p class="auth-text mt-2 text-center text-sm">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <mat-card class="auth-card p-6" *ngIf="!emailSent">
        <form [formGroup]="forgotPasswordForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div>
            <mat-form-field appearance="outline" class="w-full">
              <mat-label>Email Address</mat-label>
              <input
                matInput
                type="email"
                formControlName="email"
                placeholder="Enter your email address"
                autocomplete="email"
              />
              <mat-icon matSuffix>email</mat-icon>
              <mat-error *ngIf="forgotPasswordForm.get('email')?.hasError('required')">
                Email is required
              </mat-error>
              <mat-error *ngIf="forgotPasswordForm.get('email')?.hasError('email')">
                Please enter a valid email address
              </mat-error>
            </mat-form-field>
          </div>

          <div>
            <button
              mat-raised-button
              color="primary"
              type="submit"
              class="w-full"
              [disabled]="forgotPasswordForm.invalid || isLoading"
            >
              <mat-spinner *ngIf="isLoading" diameter="20" class="mr-2"></mat-spinner>
              Send Reset Link
            </button>
          </div>

          <div class="text-center">
            <a routerLink="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
              Back to sign in
            </a>
          </div>
        </form>
      </mat-card>

      <!-- Success message card -->
      <mat-card class="auth-card p-6 text-center" *ngIf="emailSent">
        <div class="mb-4">
          <mat-icon class="text-6xl text-green-500">check_circle</mat-icon>
        </div>
        <h3 class="auth-heading mb-2 text-lg font-medium">Reset link sent!</h3>
        <p class="auth-text mb-6 text-sm">
          We've sent a password reset link to <strong>{{ submittedEmail }}</strong
          >. Please check your email and follow the instructions to reset your password.
        </p>
        <div class="space-y-3">
          <button
            mat-raised-button
            color="primary"
            (click)="resendEmail()"
            [disabled]="isLoading"
            class="w-full"
          >
            <mat-spinner *ngIf="isLoading" diameter="20" class="mr-2"></mat-spinner>
            Resend Email
          </button>
          <div>
            <a routerLink="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
              Back to sign in
            </a>
          </div>
        </div>
      </mat-card>
    </div>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/components/forgot-password.component.ts", lineNumber: 114 });
})();
export {
  ForgotPasswordComponent
};
//# sourceMappingURL=forgot-password.component-ADAG3KOB.js.map
