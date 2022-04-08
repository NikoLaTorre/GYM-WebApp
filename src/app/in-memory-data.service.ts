import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Reservas } from './reservas/reservas.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const reservas: Reservas[] = [
    ]
    return {reservas};
  }
  genId(reservas: Reservas[]): number {
    return reservas.length > 0 ? Math.max(...reservas.map(reservas => reservas.id)) + 1 : 11;
  }
}