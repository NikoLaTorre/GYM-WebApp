import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email='';
  passwd='';
  chkPasswd='';
  nombre='';
  apellido='';
  dni=0;

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  async register(){
    await this.firebaseService.signUp(this.email, this.passwd);
    if (this.firebaseService.isLoggedIn){
      //registrar que esta iniciada la sesion
    }
  }

}
