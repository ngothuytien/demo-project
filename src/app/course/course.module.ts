import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CourseItemComponent } from './course-item/course-item.component';
import { SectionComponent } from './section/section.component';
import { TeacherInfoComponent } from './teacher-info/teacher-info.component';
import { CardDetailVideoComponent } from './card-detail-video/card-detail-video.component';
import { LessonsComponent } from './lessons/lessons.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    CourseListComponent,
    CourseItemComponent,
    SectionComponent,
    CourseDetailComponent,
    TeacherInfoComponent,
    CardDetailVideoComponent,
    LessonsComponent,
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    SharedModule,
    NgxStarRatingModule
  ],
  exports: [
  ]
})
export class CourseModule { }
