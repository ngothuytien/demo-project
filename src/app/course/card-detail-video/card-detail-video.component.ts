import { Component, Input, OnInit } from '@angular/core';
import { VideoInfo } from 'src/app/model/courseItemModel';

@Component({
  selector: 'app-card-detail-video',
  templateUrl: './card-detail-video.component.html',
  styleUrls: ['./card-detail-video.component.scss']
})
export class CardDetailVideoComponent implements OnInit {
  @Input() videoInfo!: VideoInfo ;
  @Input() status!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
