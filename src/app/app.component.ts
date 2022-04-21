import { Component, OnInit, EventEmitter } from '@angular/core';
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

  constructor(){}

  ngOnInit(): void {}
  
}
