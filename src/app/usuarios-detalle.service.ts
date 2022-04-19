import { Injectable } from '@angular/core';
import { Reservas } from './reservas/reservas.model';
import { RESERVAS_USUARIOS } from './reservas/BD-calendario';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Usuarios } from './usuarios.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuariosUrl = 'api/usuarios';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getUsuario(idUsuario: string): Observable<Usuarios[]>{  // Ver como filtrar por usuario
    const url = `${this.usuariosUrl}/?idUsuario=${idUsuario}`; // Ver como filtrar por usuario
    return this.http.get<Usuarios[]>(url)
      .pipe(
        catchError(this.handleError<Usuarios[]>('getUsuario', []))
      )
  }

  getUsuarios(): Observable<Usuarios[]>{  
    return this.http.get<Usuarios[]>(this.usuariosUrl)
      .pipe(
        catchError(this.handleError<Usuarios[]>('getUsuarios', []))
      )
  }

  addUsuario(usuario: Usuarios): Observable<Usuarios>{
    return this.http.post<Usuarios>(this.usuariosUrl, usuario)
      .pipe(
        catchError(this.handleError<Usuarios>('addUsuario'))
      );
  }

  updateUsuario(usuario: Usuarios): Observable<any>{
    return this.http.put(this.usuariosUrl, usuario, this.httpOptions)
    .pipe(
      catchError(this.handleError<Usuarios>('updateUsuario'))
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