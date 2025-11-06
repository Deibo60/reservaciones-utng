import { Routes } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { Espacios } from './espacios/espacios';
import { Reservaciones } from './reservaciones/reservaciones';
import { ReservacionesDisponibles } from './reservaciones-disponibles/reservaciones-disponibles';
import { Horarios } from './horarios/horarios';
import { EspaciosReservados } from './espacios-reservados/espacios-reservados';

export const routes: Routes = [
  { path: 'usuarios', component: Usuarios },
  { path: 'espacios', component: Espacios },
  { path: 'reservaciones', component: Reservaciones },
  { path: 'reservaciones-disponibles', component: ReservacionesDisponibles },
  { path: 'horarios', component: Horarios },
  { path: 'reportes', component: EspaciosReservados },
  { path: '**', redirectTo: '' } // Redirección por defecto si la ruta no existe
];
    