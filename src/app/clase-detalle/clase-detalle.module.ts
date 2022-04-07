import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaseDetalleComponent } from './clase-detalle.component';



@NgModule({
  declarations: [
    ClaseDetalleComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ClaseDetalleComponent
  ]
})
export class ClaseDetalleModule { }
