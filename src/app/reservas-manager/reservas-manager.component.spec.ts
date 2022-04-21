import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasManagerComponent } from './reservas-manager.component';

describe('ReservasManagerComponent', () => {
  let component: ReservasManagerComponent;
  let fixture: ComponentFixture<ReservasManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
