import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from './auth.models';

type LoginUserFormControls = {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
};

export class LoginUserForm extends FormGroup<LoginUserFormControls> {
  constructor() {
    super({
      username: new FormControl<string | null>('', Validators.required),
      password: new FormControl<string | null>('', [Validators.required, Validators.minLength(6)]),
    });
  }

  getSubmitValue(): LoginRequest {
    const formValue = this.value;
    return {
      username: formValue.username || '',
      password: formValue.password || '',
    };
  }
}
