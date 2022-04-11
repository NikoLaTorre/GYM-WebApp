import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
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

  constructor(public usersService: UsersService, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  async login(){
    await this.firebaseService.signIn(this.email, this.passwd);
    if (this.firebaseService.isLoggedIn){
      //registrar que esta iniciada la sesion
    }
    if (localStorage.getItem('user') !== null){
      this.datoscuenta = JSON.parse(localStorage.getItem('user')!).uid;
    }
    
  }

}
