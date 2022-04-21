import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reservas } from './reservas/reservas.model';
import { Usuarios } from './usuarios.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reservas: Reservas[] = [
      {id: 1, idUsuario: "IxpA4TaMRkfrxvPyCfSey7rQyak1", actividad: "prueba", hora: 8, dia: 4, mes:5, year:2022}
    ];
    const usuarios: Usuarios[] = [
      {id: 1, idUsuario: "IxpA4TaMRkfrxvPyCfSey7rQyak1", nombre: "Juan", apellido: "Perez", email: "a@a.com", creditos: 0, rol: "cliente"},
      {id: 2, idUsuario: "Of8or7haPielD2J4sVRBH5HhqhS2", nombre: "Pedro", apellido: "Martinez", email: "b@b.com", creditos: 3, rol: "cliente"},
      {id: 3, idUsuario: "Fck9InQ1G1ckrgHeMD6dQVEt1F33", nombre: "Mesa de entrada", apellido: "", email: "mesaentrada@a.com", creditos: 0, rol: "entrada"}
    ]
    return {reservas, usuarios};
  }
  genId(reservas: Reservas[]): number {
    return reservas.length > 0 ? Math.max(...reservas.map(reservas => reservas.id)) + 1 : 11;
  }
}