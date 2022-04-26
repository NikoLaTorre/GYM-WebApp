import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HORARIO, RESERVAS_USUARIOS } from '../../BD-calendario';
import { Reservas } from '../../reservas.model';
import { DetalleReservasService } from '../../../detalle-reservas.service';
import { FirebaseService } from '../../../firebase.service';
import { Subject } from 'rxjs';
import { UsuariosService } from 'src/app/usuarios-detalle.service';
import { Usuarios } from 'src/app/usuarios.model';


@Component({
  selector: 'app-dia-detalle',
  templateUrl: './dia-detalle.component.html',
  styleUrls: ['./dia-detalle.component.css']
})
export class DiaDetalleComponent implements OnInit, OnChanges {

  uid = JSON.parse(localStorage.getItem('user')!).uid;
  diaBD = HORARIO;
  @Input() dia = new Date;
  btnElegido = -1;
  disabled = true;
  claseElegida = 'Musculación';
  usuario: Usuarios | undefined;
  usuarios: Usuarios[] = [];
  tipoUsuario: string | null;
  texto = '';

  reservasBD: Reservas[] = [];

  constructor(private reservasService: DetalleReservasService, 
    public firebaseService: FirebaseService,
    private usuarioService: UsuariosService) {
  }

  ngOnInit(): void {
    this.getReservas();
    this.getUsuario();
    this.getUsuarios();
    this.tipoUsuario = localStorage.getItem('tipoCuenta');
  }

  getUsuario(): void{
    if (localStorage.getItem('user') !== null){
      this.usuarioService.getUsuario(JSON.parse(localStorage.getItem('user')!).uid)
        .subscribe(usuario => this.usuario = usuario[0]);
    }
  }
  getUsuarios():void{
    this.usuarioService.getUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.texto='';
    this.btnElegido = -1;
    this.getReservas();
  }


  filtrarDia(HORARIO: any[]): any[]{
    return HORARIO.filter(d => d.dia == this.dia?.getDay())
  }

  cambiarSeleccionado(i: number, hora: number): void{
    this.btnElegido = i;
    this.texto = '';
    this.disabled = this.checkReserva(hora);
  }
  getReservas():void{
    if (localStorage.getItem('user') !== null){
      this.reservasService.getReserva(JSON.parse(localStorage.getItem('user')!).uid)
        .subscribe(reservas => this.reservasBD = reservas);
    }
  }

  checkReserva(hora: number):boolean{
    this.getReservas();
    for (let actividad of this.reservasBD){
      if (actividad.hora == hora && actividad.dia == this.dia.getDate() && actividad.mes == this.dia.getMonth()+1){
        return true;
      }
    }
    /* if (localStorage.getItem('user') !== null){
      if (this.reservasService.getReservasDisponibles(this.dia.getMonth()+1, JSON.parse(localStorage.getItem('user')!).uid) <= 0){
        return true;
      }
    } */
    if (localStorage.getItem('user') !== null){
      if (this.usuario!.creditos <= 0){
        return true;
      }
    }
    return false;
  }

  Reservar(hora: number, actividad: string):void{
    this.disabled = true;
    //this.reservas.push(new Reservas(RESERVAS_USUARIOS.length, actividad, hora, this.dia.getDay(), this.dia.getMonth(), this.dia.getFullYear()))
    if (localStorage.getItem('user') !== null){
      let infoReserva = {idUsuario: this.usuario?.idUsuario, actividad: actividad, hora: hora, dia: this.dia.getDate(), mes: this.dia.getMonth()+1, year: this.dia.getFullYear()};
      this.reservasService.addReserva(infoReserva as Reservas)
        .subscribe(reserva => {this.reservasBD.push(reserva)})
      this.texto = 'Clase reservada!';
    }
    //RESERVAS_USUARIOS.push(infoReserva)
    this.getReservas();

    if (this.usuario){
      this.usuario.creditos -= 1;
      this.usuarioService.updateUsuario(this.usuario)
        .subscribe();
    }
    this.getUsuario();
  }


}
