import { Injectable } from '@angular/core';
import { Viaje } from '../interfaces/interface.datos';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  private posts: Viaje[] = [
    {
      id: 1,
      titulo: 'Aventura en la Patagonia',
      texto: 'Un viaje increíble por las montañas de la Patagonia.',
      imagen: 'https://imgs.search.brave.com/g14jOhpom1s2XLiE8st36xF33-hDmBFHGEr1B1Y5kOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d29ybGRhbmltYWxw/cm90ZWN0aW9uLmVz/L2Nkbi1jZ2kvaW1h/Z2UvZml0PWNvdmVy/LHdpZHRoPTEyODAv/c2l0ZWFzc2V0cy9h/cnRpY2xlL2dldHR5/aW1hZ2VzLTEyMjQ5/NDkxMDYuanBn',
      autor: 'Juan Pérez',
      fecha: '2025-03-25',
      categoria: 'Playa'
    },
    {
      id: 2,
      titulo: 'Descubriendo Roma',
      texto: 'La ciudad eterna y sus maravillas.',
      imagen: 'https://imgs.search.brave.com/g14jOhpom1s2XLiE8st36xF33-hDmBFHGEr1B1Y5kOE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d29ybGRhbmltYWxw/cm90ZWN0aW9uLmVz/L2Nkbi1jZ2kvaW1h/Z2UvZml0PWNvdmVy/LHdpZHRoPTEyODAv/c2l0ZWFzc2V0cy9h/cnRpY2xlL2dldHR5/aW1hZ2VzLTEyMjQ5/NDkxMDYuanBn',
      autor: 'María López',
      fecha: '2025-03-20',
      categoria: 'Playa'
    }];


  constructor() {}

  addPost(viaje: Viaje) {
    viaje.id = Date.now(); 
    this.posts.push(viaje); 
    console.log("Viaje agregado:", viaje);
  }

  listPosts() {
    return this.posts;
  }

  getLast() {
    return this.posts.length > 0 ? this.posts[this.posts.length - 1] : null;
  }

  getById(id: number): Viaje | undefined{
    return this.posts.find(p => p.id === id)
  }

}