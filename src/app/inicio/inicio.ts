import { Component } from '@angular/core';
import { TarjetaComponent } from '../tarjeta/tarjeta'; 

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [TarjetaComponent], 
  templateUrl: './inicio.html',
})
export class InicioComponent {}