import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  layoutTitle = new Subject<any>() ;
  constructor() {
    this.layoutTitle.next('');
  }

}
