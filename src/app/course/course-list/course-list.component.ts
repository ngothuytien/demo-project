import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  listEmployee = [
    {
      avatar: 'https://png.pngtree.com/png-clipart/20210308/original/pngtree-original-hand-drawn-illustration-teacher-avatar-png-image_5773625.jpg',
      name: 'Robert James',
      role: 'UI/UX Designer',
      course: '56 Course',
      rate: '4.9',
      totalRate: '76.335',
    },
    {
      avatar: 'https://png.pngtree.com/png-clipart/20210308/original/pngtree-original-hand-drawn-illustration-teacher-avatar-png-image_5773625.jpg',
      name: 'Robert James',
      role: 'UI/UX Designer',
      course: '56 Course',
      rate: '4.9',
      totalRate: '76.335',
    },
    {
      avatar: 'https://png.pngtree.com/png-clipart/20210308/original/pngtree-original-hand-drawn-illustration-teacher-avatar-png-image_5773625.jpg',
      name: 'Robert James',
      role: 'UI/UX Designer',
      course: '56 Course',
      rate: '4.9',
      totalRate: '76.335',
    },
    {
      avatar: 'https://png.pngtree.com/png-clipart/20210308/original/pngtree-original-hand-drawn-illustration-teacher-avatar-png-image_5773625.jpg',
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
