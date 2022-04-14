import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  passwd='';

  datoscuenta='';

  constructor(public firebaseService: FirebaseService, public router: Router) { }

  ngOnInit(): void {
  }

  async login(){
    await this.firebaseService.signIn(this.email, this.passwd);
    if (this.firebaseService.isLoggedIn){
      this.router.navigate(['/'])
    }
    if (localStorage.getItem('user') !== null){
      this.datoscuenta = JSON.parse(localStorage.getItem('user')!).uid;
    }
    
  }

}
