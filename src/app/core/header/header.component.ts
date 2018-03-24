import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpenned = false;
  authState$: Observable<User|null>;
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
