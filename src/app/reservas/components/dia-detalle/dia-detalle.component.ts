import { Component, Input, OnInit } from '@angular/core';

import { HORARIO } from '../../BD-calendario';

@Component({
  selector: 'app-dia-detalle',
  templateUrl: './dia-detalle.component.html',
  styleUrls: ['./dia-detalle.component.css']
})
export class DiaDetalleComponent implements OnInit {

  diaBD = HORARIO;
  @Input() dia?: number;

  constructor() {
  }

  ngOnInit(): void {

  }

  filtrarDia(HORARIO: any[]): any[]{
    return HORARIO.filter(d => d.dia == this.dia)
  }

}
