import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  
  items: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.items = db.list('/');
  }

  onClick($event) {
    this.db.list('/').push({tres:'tres'});
  }
  
}
