import { Component, Input, OnInit } from '@angular/core';
import { VideoInfo } from 'src/app/model/courseItemModel';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  _videoInfo!: VideoInfo;
  @Input() set videoInfo(value: VideoInfo) {
      this._videoInfo = value;
  };
  @Input() status!: string;
  @Input() duration!: string;
  @Input() urlVideo!: string;

  playVideo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
