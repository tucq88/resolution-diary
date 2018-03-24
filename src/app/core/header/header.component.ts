import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpenned = false;
  authState$: Observable<firebase.User | null>;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authState$ = this.authService.authState();
  }

  toggleMenu() {
    this.isMenuOpenned = !this.isMenuOpenned;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
