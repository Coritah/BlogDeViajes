import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  viajes = [
    {
      id: 1,
      titulo: 'Aventura en la Patagonia',
      texto: 'Un viaje increíble por las montañas de la Patagonia.',
      imagen: 'https://via.placeholder.com/300',
      autor: 'Juan Pérez',
      fecha: '2025-03-25'
    },
    {
      id: 2,
      titulo: 'Descubriendo Roma',
      texto: 'La ciudad eterna y sus maravillas.',
      imagen: 'https://via.placeholder.com/300',
      autor: 'María López',
      fecha: '2025-03-20'
    }
  ];

  agregarViaje(nuevoViaje: any) {
    this.viajes.push(nuevoViaje);
  }
}

