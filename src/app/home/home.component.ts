import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios-detalle.service';
import { Usuarios } from '../usuarios.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
