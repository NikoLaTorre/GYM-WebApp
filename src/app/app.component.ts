import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { UsuariosService } from './usuarios-detalle.service';
import { Usuarios } from './usuarios.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GYM Web App';
  //isSignedIn = false;

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
    }
  }
  
}
