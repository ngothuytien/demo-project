import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  valueSearch = "";
  @Output() search = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onEnter() {
    this.search.emit(this.valueSearch);
  }
}
