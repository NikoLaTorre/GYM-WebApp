import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HORARIO, RESERVAS_USUARIOS } from '../../BD-calendario';
import { Reservas } from '../../reservas.model';
import { DetalleReservasService } from '../../../detalle-reservas.service';


@Component({
  selector: 'app-dia-detalle',
  templateUrl: './dia-detalle.component.html',
  styleUrls: ['./dia-detalle.component.css']
})
export class DiaDetalleComponent implements OnInit, OnChanges {

  diaBD = HORARIO;
  @Input() dia = new Date;
  btnElegido = -1;

  claseElegida = 'Musculación';

  texto = '';

  reservasBD: Reservas[] = [];

  constructor(private reservasService: DetalleReservasService) {
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

  cambiarSeleccionado(i: number): void{
    this.btnElegido = i;
    this.texto= '';
  }
  getReservas():void{
    this.reservasService.getReservas(2)
      .subscribe(reservas => this.reservasBD = reservas);
  }

  checkReserva(hora: number):boolean{
    for (let actividad of this.reservasBD){
      if (actividad.hora == hora && actividad.dia == this.dia.getDate() && actividad.mes == this.dia.getMonth()){
        return true;
      }
    }
    return false;
  }

  Reservar(hora: number, actividad: string):void{
    this.texto = 'Clase reservada!';
    //this.reservas.push(new Reservas(RESERVAS_USUARIOS.length, actividad, hora, this.dia.getDay(), this.dia.getMonth(), this.dia.getFullYear()))
    let infoReserva = {idUsuario: 2, actividad: actividad, hora: hora, dia: this.dia.getDate(), mes: this.dia.getMonth(), year: this.dia.getFullYear()}
    //RESERVAS_USUARIOS.push(infoReserva)
    this.reservasService.addReserva(infoReserva as Reservas)
      .subscribe(reserva => {this.reservasBD.push(reserva)})
    this.texto = 'Clase reservada!';
  }


}
