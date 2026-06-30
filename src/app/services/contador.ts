import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  private contadorSubject = new BehaviorSubject<number>(0);

  contador$ = this.contadorSubject.asObservable();

  obtenerValor(): number {
    return this.contadorSubject.getValue();
  }

  incrementar(): void {
    this.contadorSubject.next(this.obtenerValor() + 1);
  }

  decrementar(): void {
    this.contadorSubject.next(this.obtenerValor() - 1);
  }

  reiniciar(): void {
    this.contadorSubject.next(0);
  }
}
