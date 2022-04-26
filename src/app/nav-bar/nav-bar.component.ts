import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { UsuariosService } from '../usuarios-detalle.service';
import { Usuarios } from '../usuarios.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuario: Usuarios | undefined;

  constructor(public firebaseService: FirebaseService, private usuariosService: UsuariosService){
  }

  ngOnInit(): void {
    this.getUsuario();
  }
  getUsuario():void{
    if (localStorage.getItem('user') !== null){
      this.usuariosService.getUsuario(JSON.parse(localStorage.getItem('user')!).uid)
        .subscribe(usuario => this.usuario = usuario[0]);
      localStorage.setItem('tipoCuenta', this.usuario!.rol);
    }
  }
  onActivate($event : string){
    this.getUsuario();
  }

}
