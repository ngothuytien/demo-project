import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/course/list",
    pathMatch: "full"
  },
  {
    path: "course",
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
