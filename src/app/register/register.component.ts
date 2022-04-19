import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { UsuariosService } from '../usuarios-detalle.service';
import { Usuarios } from '../usuarios.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuariosBD: Usuarios[] = [];

  email='';
  passwd='';
  chkPasswd='';
  nombre='';
  apellido='';
  dni=0;

  constructor(public firebaseService: FirebaseService, public router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  async register(){
    await this.firebaseService.signUp(this.email, this.passwd);
    if (this.firebaseService.isLoggedIn){
      let usuario = {idUsuario: JSON.parse(localStorage.getItem('user')!).uid, nombre: this.nombre ,apellido: this.apellido, email: this.email}
      this.usuariosService.addUsuario(usuario as Usuarios)
        .subscribe(usuario => {this.usuariosBD.push(usuario)})
      this.router.navigate(['/'])
    }
  }

  getUsuarios(): void{
    if (localStorage.getItem('user') !== null){
      this.usuariosService.getUsuarios()
        .subscribe(usuario => this.usuariosBD = usuario);
    }
  }

}
