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
    if (localStorage.getItem('user') !== null){
      this.reservasService.getReserva(JSON.parse(localStorage.getItem('user')!).uid)
        .subscribe(reservas => this.reservasBD = reservas);
    }
  }

  delete(reserva: Reservas): void{
    this.reservasBD = this.reservasBD.filter(r => r !== reserva);
    this.reservasService.deleteReserva(reserva.id).subscribe();
  }

}
