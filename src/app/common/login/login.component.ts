import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends SimpleModalComponent<unknown, unknown> implements OnInit {

  form : FormGroup = this.fb.group({
    userName: ['', [Validators.required, Validators.email]],
    password: new FormControl('', Validators.required),
  });

  loading = false;
  isError = false;
  showPassword: boolean = false;
  redirectPage: string = "";

  constructor(
    private fb: FormBuilder,
    private authService: AngularFireAuth,
    private router: Router,
  ) {
    super();
  }

  ngOnInit(): void {
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  login = (): void => {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.isError = false;
      this.loading = true;

      console.log(this.form.get('username')?.value, this.form.get('password')?.value)

      this.authService.signInWithEmailAndPassword(this.form.get('userName')?.value, this.form.get('password')?.value)
      .then(() => {
        this.close();
        this.router.navigateByUrl('/course/list');
      })
      .catch(() => {
        this.isError = true;
        this.loading = false;
      });
    }
  }

  closeDialog() :void {
    this.close();
  }

}
