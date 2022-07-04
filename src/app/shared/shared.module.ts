import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { ReviewComponent } from './components/review/review.component';
import { VideoComponent } from './components/video/video.component';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [CheckboxComponent,SearchComponent, ReviewComponent, VideoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxStarRatingModule
  ],
  exports: [
    CheckboxComponent,
    SearchComponent,

    ReviewComponent,
    VideoComponent
  ]
})
export class SharedModule { }
