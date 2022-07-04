import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseItem } from 'src/app/model/courseItemModel';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title!: string;
  @Input() courseList!: CourseItem[];
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateToCourseDetail(emp: string) {
    this.router.navigateByUrl(`/course/${emp}`)
  }
}
