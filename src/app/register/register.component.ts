import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  register():void{
    console.log(this.email);
    console.log(this.passwd);
    console.log(this.chkPasswd);
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.dni);
  }

}
