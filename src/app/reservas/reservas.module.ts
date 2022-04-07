import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaScreenComponent } from './screens/reserva-screen/reserva-screen.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DiaDetalleComponent } from './components/dia-detalle/dia-detalle.component';
import { CalendarModule } from 'primeng/calendar';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClaseDetalleModule } from '../clase-detalle/clase-detalle.module';


@NgModule({
  declarations: [
    ReservaScreenComponent,
    CalendarioComponent,
    DiaDetalleComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ClaseDetalleModule
  ],
  exports: [
    ReservaScreenComponent
  ],
  bootstrap: [CalendarModule]
})
export class ReservasModule { }
