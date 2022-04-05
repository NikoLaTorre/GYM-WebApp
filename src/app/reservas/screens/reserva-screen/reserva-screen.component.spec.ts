import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaScreenComponent } from './reserva-screen.component';

describe('ReservaScreenComponent', () => {
  let component: ReservaScreenComponent;
  let fixture: ComponentFixture<ReservaScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
