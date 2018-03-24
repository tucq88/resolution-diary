import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { NoteModel } from '../models/note.model';

@Injectable()
export class NoteService {
  constructor(private db: AngularFireDatabase) {
  }

  list(userId): Observable<any> {
    return this.db.list(`${userId}`).valueChanges()
      .map((note) => new NoteModel().deserialize(note));
  }

}
