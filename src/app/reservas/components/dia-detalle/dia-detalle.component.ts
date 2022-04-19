import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HORARIO, RESERVAS_USUARIOS } from '../../BD-calendario';
import { Reservas } from '../../reservas.model';
import { DetalleReservasService } from '../../../detalle-reservas.service';
import { FirebaseService } from '../../../firebase.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-dia-detalle',
  templateUrl: './dia-detalle.component.html',
  styleUrls: ['./dia-detalle.component.css']
})
export class DiaDetalleComponent implements OnInit, OnChanges {


  diaBD = HORARIO;
  @Input() dia = new Date;
  btnElegido = -1;
  disabled = true;
  claseElegida = 'Musculación';

  texto = '';

  reservasBD: Reservas[] = [];

  constructor(private reservasService: DetalleReservasService, public firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.getReservas();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.texto='';
    this.btnElegido = -1;
  }


  filtrarDia(HORARIO: any[]): any[]{
    return HORARIO.filter(d => d.dia == this.dia?.getDay())
  }

  cambiarSeleccionado(i: number, hora: number): void{
    this.btnElegido = i;
    this.texto += 'asd';
    this.disabled = this.checkReserva(hora);
  }
  getReservas():void{
    if (localStorage.getItem('user') !== null){
      this.reservasService.getReserva(JSON.parse(localStorage.getItem('user')!).uid)
        .subscribe(reservas => this.reservasBD = reservas);
    }
  }

  checkReserva(hora: number):boolean{
    for (let actividad of this.reservasBD){
      if (actividad.hora == hora && actividad.dia == this.dia.getDate() && actividad.mes == this.dia.getMonth()+1){
        return true;
      }
    }
    if (localStorage.getItem('user') !== null){
      if (this.reservasService.getReservasDisponibles(this.dia.getMonth()+1, JSON.parse(localStorage.getItem('user')!).uid) <= 0){
        return true;
      }
    }
    return false;
  }

  Reservar(hora: number, actividad: string):void{
    this.disabled = true;
    //this.reservas.push(new Reservas(RESERVAS_USUARIOS.length, actividad, hora, this.dia.getDay(), this.dia.getMonth(), this.dia.getFullYear()))
    if (localStorage.getItem('user') !== null){
      let infoReserva = {idUsuario: JSON.parse(localStorage.getItem('user')!).uid, actividad: actividad, hora: hora, dia: this.dia.getDate(), mes: this.dia.getMonth()+1, year: this.dia.getFullYear()};
      this.reservasService.addReserva(infoReserva as Reservas)
        .subscribe(reserva => {this.reservasBD.push(reserva)})
      this.texto = 'Clase reservada!';
    }
    //RESERVAS_USUARIOS.push(infoReserva)

  }


}
