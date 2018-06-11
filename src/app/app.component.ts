import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(): void {

    var config = {
      apiKey: "AIzaSyD_DUp3Lnzhb-WjwGfI_9_748YA7xbxVfc",
      authDomain: "jta-instagram-clone-353bf.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-353bf.firebaseio.com",
      projectId: "jta-instagram-clone-353bf",
      storageBucket: "jta-instagram-clone-353bf.appspot.com",
      messagingSenderId: "532969263885"
    };

    firebase.initializeApp(config);
  }
}
