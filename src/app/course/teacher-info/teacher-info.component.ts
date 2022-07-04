import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employeeModel';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.scss']
})
export class TeacherInfoComponent implements OnInit {
  @Input() emp: Employee = {};
  constructor() { }

  ngOnInit(): void {
  }

}
