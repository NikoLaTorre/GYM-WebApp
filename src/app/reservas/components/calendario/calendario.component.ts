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

  diaElegido?: number;

  constructor() {
   }

  ngOnInit(): void {
    //this.date14 = new Date();
  }

  cambiaDia(date: Date):void{
    this.diaElegido = date.getDay();
    if (this.diaElegido == 1){
    }
  }

}
