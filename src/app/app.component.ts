import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'Resolution Diary';

  constructor( db: AngularFireDatabase ) {
    // const items = db.list( 'users' ).valueChanges().toPromise();
    // console.log(items);
  }
}
