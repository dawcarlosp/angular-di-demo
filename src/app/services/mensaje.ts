import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensaje = signal('');

  enviar(texto: string): void {
    this.mensaje.set(texto);
  }
}
