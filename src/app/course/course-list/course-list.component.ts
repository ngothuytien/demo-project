import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  listEmployee = [
    {
      avatar: 'https://pngtree.com/freepng/original-hand-drawn-illustration-teacher-avatar_5773625.html',
      name: 'Robert James',
      role: 'UI/UX Designer',
      course: '56 Course',
      rate: '4.9',
      totalRate: '76.335',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
