import { Component, Input, OnInit } from '@angular/core';
import { VideoInfo } from 'src/app/model/courseItemModel';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() videoInfo!: VideoInfo;
  @Input() status: string = "";
  @Input() duration = "25mins";
  @Input() urlVideo = "https://vjs.zencdn.net/v/oceans.mp4";

  playVideo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
