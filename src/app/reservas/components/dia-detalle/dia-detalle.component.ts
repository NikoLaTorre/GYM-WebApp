import { Component, Input, OnInit } from '@angular/core';

import { HORARIO, RESERVAS_USUARIOS } from '../../BD-calendario';


@Component({
  selector: 'app-dia-detalle',
  templateUrl: './dia-detalle.component.html',
  styleUrls: ['./dia-detalle.component.css']
})
export class DiaDetalleComponent implements OnInit {

  diaBD = HORARIO;
  @Input() dia = new Date;
  btnElegido = -1;

  claseElegida = 'Musculación';

  texto = '';

  constructor() {
  }

  ngOnInit(): void {

  }

  filtrarDia(HORARIO: any[]): any[]{
    return HORARIO.filter(d => d.dia == this.dia?.getDay())
  }

  cambiarSeleccionado(i: number): void{
    this.btnElegido = i;
    this.texto= '';
  }

  Reservar(hora: number, actividad: string):void{
    let infoReserva = {id: RESERVAS_USUARIOS.length, actividad: actividad, hora: hora, dia: this.dia.getDay(), mes: this.dia.getMonth(), year: this.dia.getFullYear()}
    RESERVAS_USUARIOS.push(infoReserva)
    this.texto = 'Clase reservada!';
  }

}
