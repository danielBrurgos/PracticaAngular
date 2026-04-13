import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink], // Esto es lo que hará que funcionen los clics
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { // <--- CAMBIA ESTO: Deja solo "App"
  title = 'practica-routing';
}