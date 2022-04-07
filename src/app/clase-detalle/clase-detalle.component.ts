import { Component, Input, OnInit } from '@angular/core';
import { CLASES } from '../reservas/BD-calendario';

@Component({
  selector: 'app-clase-detalle',
  templateUrl: './clase-detalle.component.html',
  styleUrls: ['./clase-detalle.component.css']
})
export class ClaseDetalleComponent implements OnInit {

  clases = CLASES;

  @Input() claseElegida = '';

  constructor() { }

  ngOnInit(): void {
  }

  filtrarClase(CLASES: any[]): any[]{
    return CLASES.filter(c => c.actividad == this.claseElegida)
  }

}
