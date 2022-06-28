import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.scss']
})
export class TeacherInfoComponent implements OnInit {
  @Input() emp: any= {};
  constructor() { }

  ngOnInit(): void {
  }

}
