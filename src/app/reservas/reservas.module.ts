import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaScreenComponent } from './screens/reserva-screen/reserva-screen.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DiaDetalleComponent } from './components/dia-detalle/dia-detalle.component';



@NgModule({
  declarations: [
    ReservaScreenComponent,
    CalendarioComponent,
    DiaDetalleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReservaScreenComponent
  ]
})
export class ReservasModule { }
