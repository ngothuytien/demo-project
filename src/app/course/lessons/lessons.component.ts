import { Component, Input, OnInit } from '@angular/core';
import { Lesson } from 'src/app/model/courseItemModel';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {
  @Input() lessons!: Lesson[] ;
  showFull = false;
  constructor() { }

  ngOnInit(): void {
  }

  onShow() {
    this.showFull = !this.showFull;
  }
}
