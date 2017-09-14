import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCCD2fBsyKQABFQuVSjDE7D3lDkfozt1_g",
  authDomain: "crudproject-827d8.firebaseapp.com",
  databaseURL: "https://crudproject-827d8.firebaseio.com",
  projectId: "crudproject-827d8",
  storageBucket: "crudproject-827d8.appspot.com",
  messagingSenderId: "1083123124092"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
