import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios-detalle.service';
import { DetalleReservasService } from '../detalle-reservas.service';
import { Reservas } from '../reservas/reservas.model';
import { Usuarios } from '../usuarios.model';

@Component({
  selector: 'app-reservas-manager',
  templateUrl: './reservas-manager.component.html',
  styleUrls: ['./reservas-manager.component.css']
})
export class ReservasManagerComponent implements OnInit {

  reservasBD: Reservas[] = [];
  usuariosBD: Usuarios[] = []

  constructor(private usuariosService: UsuariosService, private reservasService: DetalleReservasService) { }

  ngOnInit(): void {
    this.getReservas();
    this.getUsuarios();
  }

  getReservas(): void{
    this.reservasService.getReservas()
      .subscribe(reservas => this.reservasBD = reservas);
  }

  getUsuarios(): void{
    this.usuariosService.getUsuarios()
      .subscribe(usuarios => this.usuariosBD = usuarios);
  }

  filtrarUsuario(uid: string): Usuarios{
    return (this.usuariosBD.filter(usuario => usuario.idUsuario == uid))[0]
  }

}
