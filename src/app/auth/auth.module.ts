import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './common-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule as AngularCommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularCommonModule,
  ]
})
export class AuthModule { }
