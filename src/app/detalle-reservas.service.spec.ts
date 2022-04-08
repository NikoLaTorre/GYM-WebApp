import { TestBed } from '@angular/core/testing';

import { DetalleReservasService } from './detalle-reservas.service';

describe('DetalleReservasService', () => {
  let service: DetalleReservasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleReservasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
