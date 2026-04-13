import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { ServiciosComponent } from './servicios/servicios';
import { ContactoComponent } from './contacto/contacto';
import { AcercaDeComponent } from './acerca-de/acerca-de';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];