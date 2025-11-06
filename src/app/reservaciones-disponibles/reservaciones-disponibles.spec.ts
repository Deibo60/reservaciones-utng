import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservacionesDisponibles } from './reservaciones-disponibles';

describe('ReservacionesDisponibles', () => {
  let component: ReservacionesDisponibles;
  let fixture: ComponentFixture<ReservacionesDisponibles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservacionesDisponibles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservacionesDisponibles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
