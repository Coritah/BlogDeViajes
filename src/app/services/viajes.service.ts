import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private viajes: any[] = []; // Aquí se guardarán los datos localmente

  constructor() {}

  agregarViaje(viaje: any) {
    this.viajes.push(viaje);
    console.log("Viaje agregado:", viaje);
  }

  obtenerViajes() {
    return this.viajes; // Retorna la lista de viajes almacenados
  }
}
