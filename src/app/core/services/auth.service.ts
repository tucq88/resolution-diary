import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { User } from 'firebase/app';

@Injectable()
export class AuthService {

  constructor( public ngFireAuth: AngularFireAuth ) {
  }

  login() {
    this.ngFireAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider() );
  }

  logout() {
    this.ngFireAuth.auth.signOut();
  }

  authState(): Observable<User | null> {
    return this.ngFireAuth.authState;
  }

}
