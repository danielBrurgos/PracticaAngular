import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  templateUrl: './tarjeta.html',  
  styleUrl: './tarjeta.css'      
})
export class TarjetaComponent {
  // Criterio: Usar @Input para recibir datos
  @Input() nombre: string = 'Usuario';
  @Input() edad: number = 0;

  // Lógica para el contador
  likes: number = 0;

  // Criterio: Manejo de evento click
  darLike() {
    this.likes++;
  }
}