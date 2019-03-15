import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginSignUp-app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB88qH1Hj8_iQovqarh5db6dSqe7bc2esQ",
    authDomain: "user-authentication-9602a.firebaseapp.com"
    })
  };
}
