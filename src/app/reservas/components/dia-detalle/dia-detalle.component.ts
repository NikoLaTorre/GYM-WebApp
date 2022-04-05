import { Component, Input, OnInit } from '@angular/core';

import { LUNES, MARTES, MIERCOLES, JUEVES, VIERNES } from '../../BD-calendario';

@Component({
  selector: 'app-dia-detalle',
  templateUrl: './dia-detalle.component.html',
  styleUrls: ['./dia-detalle.component.css']
})
export class DiaDetalleComponent implements OnInit {

  dia = LUNES;
  //@Input() dia?: [];

  constructor() {
   }

  ngOnInit(): void {

  }

}
