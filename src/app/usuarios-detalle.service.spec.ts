import { TestBed } from '@angular/core/testing';

import { UsuariosDetalleService } from './usuarios-detalle.service';

describe('UsuariosDetalleService', () => {
  let service: UsuariosDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
