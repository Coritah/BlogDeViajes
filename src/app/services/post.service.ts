import { Injectable } from '@angular/core';
import { Viaje } from '../interfaces/interface.datos';


@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private viajes: Viaje [] = [];

  constructor() {

  }


}
