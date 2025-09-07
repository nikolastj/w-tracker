import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { RegisterRequest } from './auth.models';

type RegisterUserFormControls = {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  username: FormControl<string | null>;
  bio: FormControl<string | null>;
  imageUrl: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
  email: FormControl<string | null>;
  registerCode: FormControl<string | null>;
};

export class RegisterUserForm extends FormGroup<RegisterUserFormControls> {
  constructor() {
    super(
      {
        firstName: new FormControl<string | null>('', Validators.required),
        lastName: new FormControl<string | null>('', Validators.required),
        username: new FormControl<string | null>('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        bio: new FormControl<string | null>(''),
        imageUrl: new FormControl<string | null>(''),
        password: new FormControl<string | null>('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl<string | null>('', Validators.required),
        email: new FormControl<string | null>('', [Validators.required, Validators.email]),
        registerCode: new FormControl<string | null>('', Validators.required),
      },
      { validators: RegisterUserForm.passwordMatchValidator },
    );
  }

  getSubmitValue(): RegisterRequest {
    const formValue = this.value;
    return {
      user: {
        firstName: formValue.firstName || '',
        lastName: formValue.lastName || '',
        username: formValue.username || '',
        bio: formValue.bio || '',
        password: formValue.password || '',
        email: formValue.email || '',
        registerCode: formValue.registerCode || '',
      },
    };
  }

  private static passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const form = control as FormGroup;
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      if (confirmPassword?.hasError('passwordMismatch')) {
        confirmPassword.setErrors(null);
      }
      return null;
    }
  };
}
