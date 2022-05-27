import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-client-layout',
  templateUrl: './base-client-layout.component.html',
  styleUrls: ['./base-client-layout.component.scss'],
})
export class BaseClientLayoutComponent implements OnInit {
  isAuth = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuthenticated();
    console.log(this.isAuth);
  }
  loginApp() {
    this.authService.loggin();
    this.isAuth = this.authService.isAuthenticated();
  }
  logoutApp() {
    this.authService.logout();
    this.isAuth = this.authService.isAuthenticated();
  }
}
