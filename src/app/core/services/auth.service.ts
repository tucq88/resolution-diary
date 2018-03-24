import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

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

  authState(): Observable<firebase.User | null> {
    return this.ngFireAuth.authState;
  }

  getUserId() {
    return this.authState().map( user => user.uid );
  }

}
