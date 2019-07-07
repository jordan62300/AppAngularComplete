import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyAW5YE1CahJUDUiZnbfbl4-GeYn-8LeIeQ",
      authDomain: "angularopenclassroom-57faf.firebaseapp.com",
      databaseURL: "https://angularopenclassroom-57faf.firebaseio.com",
      projectId: "angularopenclassroom-57faf",
      storageBucket: "gs://angularopenclassroom-57faf.appspot.com",
      messagingSenderId: "881099044593",
      appId: "1:881099044593:web:7b9d7abbf5c0240c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  title = 'bookshelves';
}
