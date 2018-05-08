import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../core/services/auth.service';
import { NoteService } from '../shared/services/note.service';
import { flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  notes$: Observable<any>;
  constructor(private ngFireDB: AngularFireDatabase,
              private authService: AuthService,
              private noteService: NoteService) {
  }

  ngOnInit() {
    const getUserId$ = this.authService.getUserId();
    this.notes$ = getUserId$
      .pipe(
        flatMap( userId => {
          return this.noteService.list(userId);
        })
      );
  }

}
