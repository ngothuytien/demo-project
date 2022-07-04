import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CourseModule } from './course/course.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { CourseService } from './services/firebase.service';
import { LayoutService } from './services/layout.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from './common/common.module';
import { SimpleModalModule } from 'ngx-simple-modal';
import firebase from 'firebase/compat';

const config = {
  apiKey: "AIzaSyDXQFip7OCqcQpdOdFvNjz9yl0S6pxoRkk",
  authDomain: "fir-angular-june-2022.firebaseapp.com",
  projectId: "fir-angular-june-2022",
  storageBucket: "fir-angular-june-2022.appspot.com",
  messagingSenderId: "795873422491",
  appId: "1:795873422491:web:ab65d26d198c7108c2aa3e",
  measurementId: "G-503B26EVPS"
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CourseModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SimpleModalModule.forRoot({container: document.body}),
  ],
  providers: [CourseService, LayoutService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
