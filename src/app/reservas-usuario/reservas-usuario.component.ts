import { Component, OnInit } from '@angular/core';
import { RESERVAS_USUARIOS } from '../reservas/BD-calendario';
import { DetalleReservasService } from '../detalle-reservas.service';
import { Reservas } from '../reservas/reservas.model';
import { Usuarios } from '../usuarios.model';
import { UsuariosService } from '../usuarios-detalle.service';

@Component({
  selector: 'app-reservas-usuario',
  templateUrl: './reservas-usuario.component.html',
  styleUrls: ['./reservas-usuario.component.css']
})
export class ReservasUsuarioComponent implements OnInit {

  reservasBD: Reservas[] = [];
  usuario: Usuarios | undefined;

  constructor(private reservasService: DetalleReservasService, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.getReservas();
    this.getUsuario();
  }

  getReservas():void{
    if (localStorage.getItem('user') !== null){
      this.reservasService.getReserva(JSON.parse(localStorage.getItem('user')!).uid)
        .subscribe(reservas => this.reservasBD = reservas);
    }
  }

  getUsuario():void{
    if (localStorage.getItem('user') !== null){
      this.usuariosService.getUsuario(JSON.parse(localStorage.getItem('user')!).uid)
        .subscribe(usuario => this.usuario = usuario[0]);
    }
  }

  delete(reserva: Reservas): void{
    this.reservasBD = this.reservasBD.filter(r => r !== reserva);
    this.reservasService.deleteReserva(reserva.id)
      .subscribe();
    if (this.usuario){
      this.usuario.creditos += 1;
      this.usuariosService.updateUsuario(this.usuario)
        .subscribe();
    }
    this.getUsuario();
  }

}
