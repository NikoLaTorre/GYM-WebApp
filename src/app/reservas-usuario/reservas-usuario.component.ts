import { Component, OnInit } from '@angular/core';
import { RESERVAS_USUARIOS } from '../reservas/BD-calendario';

@Component({
  selector: 'app-reservas-usuario',
  templateUrl: './reservas-usuario.component.html',
  styleUrls: ['./reservas-usuario.component.css']
})
export class ReservasUsuarioComponent implements OnInit {

  reservasBD = RESERVAS_USUARIOS;

  constructor() { }

  ngOnInit(): void {
  }

}
