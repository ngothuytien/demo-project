import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseModule } from './course/course.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CourseService } from './services/firebase.service';
import { LayoutService } from './services/layout.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { SimpleModalModule } from 'ngx-simple-modal';
import { Config } from './config/config';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CourseModule,
    AngularFireModule.initializeApp(Config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    SimpleModalModule.forRoot({container: document.body}),
  ],
  providers: [CourseService, LayoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
