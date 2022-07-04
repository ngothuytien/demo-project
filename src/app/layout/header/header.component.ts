import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/common/login/login.component';
import { SimpleModalService } from 'ngx-simple-modal';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  layoutTitle!: string;
  constructor(public layoutService: LayoutService,
              public router: Router,
              private simpleModalService: SimpleModalService
              ){ }

  ngOnInit(): void {
    this.layoutService.layoutTitle.subscribe((res) => {
      this.layoutTitle = res;
    })
  }

  openLogin() {
    this.simpleModalService.addModal(LoginComponent)
    .subscribe() ;
  }

  back() {
    this.router.navigateByUrl('/course/list');
  }
}
