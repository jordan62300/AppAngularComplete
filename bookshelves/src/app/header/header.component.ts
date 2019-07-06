import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor( private authService: AuthService) { }

  ngOnInit() {
    console.log(this.isAuth)
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user)  {
          this.isAuth = true
        } else {
          this.isAuth = false
        }
      }
    )
  }

  onSignOut() {
    this.authService.signOutUser();
  }


}
