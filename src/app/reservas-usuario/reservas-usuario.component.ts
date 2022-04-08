import { Component, OnInit } from '@angular/core';
import { RESERVAS_USUARIOS } from '../reservas/BD-calendario';
import { DetalleReservasService } from '../detalle-reservas.service';
import { Reservas } from '../reservas/reservas.model';

@Component({
  selector: 'app-reservas-usuario',
  templateUrl: './reservas-usuario.component.html',
  styleUrls: ['./reservas-usuario.component.css']
})
export class ReservasUsuarioComponent implements OnInit {

  reservasBD: Reservas[] = [];

  constructor(private reservasService: DetalleReservasService) { }

  ngOnInit(): void {
    this.getReservas();
  }

  getReservas():void{
    this.reservasService.getReservas(2)
      .subscribe(reservas => this.reservasBD = reservas);
  }

}
