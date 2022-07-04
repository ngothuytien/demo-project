import { Component, OnInit } from '@angular/core';
import { CourseItem } from 'src/app/model/courseItemModel';
import { Employee } from 'src/app/model/employeeModel';
import { CourseService } from 'src/app/services/firebase.service';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseList!: CourseItem[];
  listEmployee!: Employee[];

  constructor(public fb: CourseService,
              public layout: LayoutService) { }

  ngOnInit(): void {
    this.layout.layoutTitle.next('courseList');
    this.fb.getCourse().subscribe((res: CourseItem[]) => {
      this.courseList = res;
    },);
    this.fb.getEmployee().subscribe((res: Employee[]) => {
      this.listEmployee = res;
    },);
  }

}
