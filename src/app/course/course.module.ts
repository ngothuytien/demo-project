import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { SearchComponent } from '../components/search/search.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from '../components/filter/filter.component';



@NgModule({
  declarations: [
    CourseListComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule
  ],
  exports: [
  ]
})
export class CourseModule { }
