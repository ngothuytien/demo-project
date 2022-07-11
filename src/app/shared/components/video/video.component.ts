import { Component, Input, OnInit } from '@angular/core';
import { VideoInfo } from 'src/app/model/courseItemModel';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  @Input() videoInfo!: VideoInfo;
  @Input() status!: string;
  @Input() duration!: string;
  @Input() urlVideo!: string;

  playVideo = false;

  constructor() { }

  ngOnInit(): void {
  }

}
