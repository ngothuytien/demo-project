import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SimpleModalService } from 'ngx-simple-modal';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  layoutTitle!: string;
  checkLogin = false;
  constructor(public layoutService: LayoutService,
              public router: Router,
              private simpleModalService: SimpleModalService,
              private authService: AuthService
              ){ }

  ngOnInit(): void {
    this.layoutService.layoutTitle.subscribe((res) => {
      this.layoutTitle = res;
    })
    this.checkLogin = this.authService.isLoggedIn;
  }

  openLogin() {
    this.simpleModalService.addModal(LoginComponent)
    .subscribe() ;
  }

  back() {
    this.router.navigateByUrl('/course/list');
  }

  signOut() {
    this.authService.signOut();
    this.checkLogin = this.authService.isLoggedIn;
  }
}
