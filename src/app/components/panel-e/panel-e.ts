import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panel-e',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './panel-e.html',
  styleUrl: './panel-e.css'
})
export class PanelEComponent {
  texto = '';
  enviar = output<string>();

  emitir(): void {
    this.enviar.emit(this.texto);
  }
}
