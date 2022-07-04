import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonRoutingModule } from './common-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule as AngularCommonModule } from '@angular/common';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularCommonModule,
  ]
})
export class CommonModule { }
