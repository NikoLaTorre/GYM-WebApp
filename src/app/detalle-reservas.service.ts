import { Injectable } from '@angular/core';
import { Reservas } from './reservas/reservas.model';
import { RESERVAS_USUARIOS } from './reservas/BD-calendario';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuarios } from './usuarios.model';
import { UsuariosService } from './usuarios-detalle.service';
import { waitForAsync } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DetalleReservasService {

  private reservasUrl = 'api/reservas';
  reservasUsuario: Reservas[] = [];
  usuario: Usuarios = {id: -1, idUsuario: "a", nombre: "b", apellido: "c", email: "d", creditos: 0, rol: "e"};

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private usuariosService: UsuariosService) { }

  getReserva(idUsuario: string): Observable<Reservas[]>{  
    const url = `${this.reservasUrl}/?idUsuario=${idUsuario}`; 
    return this.http.get<Reservas[]>(url)
      .pipe(
        catchError(this.handleError<Reservas[]>('getReservas', []))
      )
  }

  getReservas(): Observable<Reservas[]>{  
    return this.http.get<Reservas[]>(this.reservasUrl)
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

  getReservasDisponibles(mes: number, idUsuario: string): number{
    this.usuariosService.getUsuario(idUsuario)
      .subscribe(usuario => {this.usuario = usuario[0]});
    let resDisp = this.usuario.creditos;
    this.getReserva(idUsuario)
      .subscribe(reservas => { this.reservasUsuario = reservas
      }
    );
    for (let reserva of this.reservasUsuario){
      if (reserva.mes == mes){
        resDisp -= 1;
      };
    }
    return resDisp;
  }
    //Cambiar forma en que se cuenta las reservas disponibles. Ya no hace falta este metodo.. o si?
    


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }}
