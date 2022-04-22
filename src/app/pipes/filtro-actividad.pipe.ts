import { Pipe, PipeTransform } from '@angular/core';
import { Reservas } from '../reservas/reservas.model';

@Pipe({
  name: 'filtroActividad'
})
export class FiltroActividadPipe implements PipeTransform {

  transform(reservas: Reservas[], actividad:string){
    if (actividad != "Todos"){
      return reservas.filter(reserva => reserva.actividad == actividad);
    }
    else{
      return reservas;
    }
  }

}
