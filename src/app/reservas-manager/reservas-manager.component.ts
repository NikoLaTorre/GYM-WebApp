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
  usuariosBD: Usuarios[] = [];
  date = new Date();
  actividadSeleccionada = {name: 'Todos'};
  actividades = [{name: "Todos"}, {name: "Musculación"}, {name: "GAP"}, {name: "Funcional"}, {name: "Ritmos"}, {name: "HIIT"}];

  constructor(private usuariosService: UsuariosService, private reservasService: DetalleReservasService) { }

  ngOnInit(): void {
    this.getReservas();
    this.getUsuarios();
  }

  getReservas(){
    this.reservasService.getReservas()
      .subscribe({next: reservas => this.reservasBD = reservas,
                  complete: () => this.cambiaFecha()});
  }

  getUsuarios(): void{
    this.usuariosService.getUsuarios()
      .subscribe(usuarios => this.usuariosBD = usuarios);
  }

  filtrarUsuario(uid: string): Usuarios{
    return (this.usuariosBD.filter(usuario => usuario.idUsuario == uid))[0]
  }

  cambiaFecha(){
    this.reservasBD =  this.reservasBD.filter(reserva => (reserva.dia == this.date.getDate() 
    && reserva.mes == this.date.getMonth()+1 
    && reserva.year == this.date.getFullYear()));
  }

}
