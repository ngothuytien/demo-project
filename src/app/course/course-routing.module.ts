import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseListComponent } from './course-list/course-list.component';

const routes: Routes = [
  {
    path: "list",
    component: CourseListComponent
  },
  {
    path: ':id', // child route path
    component: CourseDetailComponent, // child route component that the router render
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
