import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Foto {
  id: number;
  url: string;
  titulo: string;
  likes: number;
}

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule, FormsModule],
  /* CORRECCIÓN: Nombres de archivos exactos según tu estructura */
  templateUrl: './galeria.html', 
  styleUrl: './galeria.css'
})
export class GaleriaComponent {
  // Arreglo de fotos inicial
  listaFotos: Foto[] = [
    { id: 1, url: 'https://picsum.photos/id/10/300/200', titulo: 'Montañas', likes: 0 },
    { id: 2, url: 'https://picsum.photos/id/20/300/200', titulo: 'Escritorio', likes: 0 }
  ];

  // Variables vinculadas al formulario con ngModel
  nuevoTitulo: string = '';
  nuevaUrl: string = '';

  // 5. Getter para el total de likes (se actualiza automáticamente)
  get totalLikes(): number {
    return this.listaFotos.reduce((total, foto) => total + foto.likes, 0);
  }

  // 2. Método para añadir fotos al arreglo
  agregarFoto() {
    if (this.nuevoTitulo.trim() && this.nuevaUrl.trim()) {
      const nueva: Foto = {
        id: Date.now(),
        url: this.nuevaUrl,
        titulo: this.nuevoTitulo,
        likes: 0
      };
      this.listaFotos.push(nueva);
      
      // Limpiar campos del formulario
      this.nuevoTitulo = '';
      this.nuevaUrl = '';
    }
  }

  // 3. Incrementar likes de una foto específica
  darLike(id: number) {
    const foto = this.listaFotos.find(f => f.id === id);
    if (foto) {
      foto.likes++;
    }
  }

  // 4. Eliminar foto del arreglo
  eliminarFoto(id: number) {
    this.listaFotos = this.listaFotos.filter(f => f.id !== id);
  }
}