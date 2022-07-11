import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  layoutTitle!: string;
  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.layoutTitle.subscribe((res) => {
      this.layoutTitle = res;
    })
  }

}
