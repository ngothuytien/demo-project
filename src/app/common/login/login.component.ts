import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : FormGroup = this.fb.group({
    userName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z\-]+$/)]],
    password: new FormControl(null, Validators.required),
    remember: new FormControl(null)
  });

  loading = false;
  isError = false;
  showPassword: boolean = false;
  redirectPage: string = "";

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  login(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.isError = false;
      this.loading = true;

    }
  }

  redirectAfterLogin(): void {

  }

}
