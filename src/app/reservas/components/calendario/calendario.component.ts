import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  dias: number[] = [];

  diaElegido?: number;

  constructor() {
    for (var i = 1;i<31;i++){
      this.dias[i-1] = i;
    }
   }

  ngOnInit(): void {
  }

  showDetail(dia: number): void{
    this.diaElegido = dia;
  }

}
