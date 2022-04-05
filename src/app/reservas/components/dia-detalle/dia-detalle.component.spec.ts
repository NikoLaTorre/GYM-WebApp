import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDetalleComponent } from './dia-detalle.component';

describe('DiaDetalleComponent', () => {
  let component: DiaDetalleComponent;
  let fixture: ComponentFixture<DiaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
