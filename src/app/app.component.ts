import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GYM Web App';
  //isSignedIn = false;
  constructor(public firebaseService: FirebaseService){
  }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null){
      //this.isSignedIn = true;
    }
    else{
      //this.isSignedIn = false;
    }
  }
  
}
