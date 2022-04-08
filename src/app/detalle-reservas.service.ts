import { Injectable } from '@angular/core';
import { Reservas } from './reservas/reservas.model';
import { RESERVAS_USUARIOS } from './reservas/BD-calendario';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetalleReservasService {

  private reservasUrl = 'api/reservas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getReservas(idUsuario: number): Observable<Reservas[]>{  // Ver como filtrar por usuario
    const url = `${this.reservasUrl}/?idUsuario=${idUsuario}`; // Ver como filtrar por usuario
    return this.http.get<Reservas[]>(url)
      .pipe(
        catchError(this.handleError<Reservas[]>('getReservas', []))
      )
  }

  addReserva(reserva: Reservas): Observable<Reservas>{
    return this.http.post<Reservas>(this.reservasUrl, reserva)
      .pipe(
        catchError(this.handleError<Reservas>('addReserva'))
      );
  }

  deleteReserva(id: number): Observable<Reservas>{
    const url = `${this.reservasUrl}/${id}`
    return this.http.delete<Reservas>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Reservas>('addReserva'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}

}
