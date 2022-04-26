import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaIndefinidaComponent } from './ruta-indefinida.component';

describe('RutaIndefinidaComponent', () => {
  let component: RutaIndefinidaComponent;
  let fixture: ComponentFixture<RutaIndefinidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaIndefinidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaIndefinidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
