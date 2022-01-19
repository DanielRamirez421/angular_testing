import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginForm {

  public form!: FormGroup;

  constructor( private formBuilder: FormBuilder ) {

    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });

  }


}
