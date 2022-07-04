import { Component, Input, OnInit } from '@angular/core';
import { CourseItem } from 'src/app/model/courseItemModel';
import Utils from 'src/app/model/ultis';
import { LayoutService } from 'src/app/services/layout.service';
@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {
  @Input() courseItem!: CourseItem;
  logo = "";
  buttonTitle= "";
  constructor(public layoutServie: LayoutService) { }

  ngOnInit() {
    this.logo = Utils.getLogo(this.courseItem?.investor);
    this.buttonTitle =  Utils.courseOfUser(this.courseItem.userId) ? 'Enroll now': 'Buy Now'
  }

}
