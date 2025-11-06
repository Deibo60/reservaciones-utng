import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosReservados } from './espacios-reservados';

describe('EspaciosReservados', () => {
  let component: EspaciosReservados;
  let fixture: ComponentFixture<EspaciosReservados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaciosReservados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaciosReservados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
