import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  public img ="https://giaovientienganh.edu.vn/wp-content/uploads/2017/06/d1414056f8f91db09e6db847e8b46e102a441d3cc94935e110pimgpsh-fullsize-distr-1.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
