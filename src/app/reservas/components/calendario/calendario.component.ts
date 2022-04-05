import { Component, OnInit,  } from '@angular/core';

import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  //date14: Date;
  value = new Date;

  diiString?: string;

  dias: number[] = [];

  diaElegido?: number;

  constructor() {
    for (var i = 1;i<31;i++){
      this.dias[i-1] = i;
    }
   }

  ngOnInit(): void {
    //this.date14 = new Date();
  }

  showDetail(dia: number): void{
    this.diaElegido = dia;
  }

  cambiaDia(date: Date):void{
    this.diaElegido = date.getDay();
  }

}
