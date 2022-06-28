import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [CheckboxComponent,SearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CheckboxComponent,
    SearchComponent
  ]
})
export class SharedModule { }
