import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseItem, LessonContent } from 'src/app/model/courseItemModel';
import Utils from 'src/app/model/ultis';
import { CourseService } from 'src/app/services/firebase.service';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  courseDetail!: CourseItem ;
  lessonContent!: LessonContent;
  id!: string;
  star = 5;
  buttonTitle!: string;
  seeFull = false;
  logo = "";
  constructor(public layout: LayoutService,
              public route: ActivatedRoute,
              public fb: CourseService
    ) { }

  ngOnInit(): void {
    this.layout.layoutTitle.next('courseDetail');
    this.id = this.route?.snapshot?.paramMap?.get('id') ?? "";
    this.fb.getCourseDetail(this.id).subscribe((res) => {
      this.courseDetail = res;
      this.lessonContent = this.courseDetail.lessonContent
      this.buttonTitle =  Utils.courseOfUser(this.courseDetail.userId) ? 'Enroll now': 'Buy Now'
      this.logo = Utils.getLogo(this.courseDetail.investor);
    })

  }

}
