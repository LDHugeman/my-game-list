import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PersistanceService {
  constructor() {}
  get(nombre: string) {
    let dato = '';
    try {
      dato = JSON.parse(localStorage.getItem(nombre));
    } catch {
      return null;
    }
    return dato;
  }

  set(nombre: string, dato: any) {
    localStorage.setItem(nombre, JSON.stringify(dato));
  }
}
