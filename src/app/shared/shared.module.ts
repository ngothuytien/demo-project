import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';
import { ReviewComponent } from './components/review/review.component';
import { VideoComponent } from './components/video/video.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    CheckboxComponent,
    SearchComponent,
    ReviewComponent,
    VideoComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxStarRatingModule
  ],
  exports: [
    CheckboxComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    ReviewComponent,
    VideoComponent
  ]
})
export class SharedModule { }
