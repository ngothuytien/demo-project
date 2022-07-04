import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  comment = "";
  starReview = 0;
  @Output() changeValue = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.changeValue.emit({comment: this.comment,starReview: this.starReview})
  }

}
