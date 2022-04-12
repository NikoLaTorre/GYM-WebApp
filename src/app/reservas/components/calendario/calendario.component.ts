import { Component, OnInit,  } from '@angular/core';

import {CalendarModule} from 'primeng/calendar';
import { FirebaseService } from '../../../firebase.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  value = new Date;
  today: Date = new Date();

  //diaElegido = new Date;
  constructor(public firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    //this.date14 = new Date();
    this.firebaseService.isLoggedIn;
  }

  cambiaDia(date: Date):void{
    //this.diaElegido = date.getDay();
    // if (this.diaElegido == 1){
    // }
  }

}
