import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MensajeService } from '../../services/mensaje';

@Component({
  selector: 'app-panel-c',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './panel-c.html',
  styleUrl: './panel-c.css'
})
export class PanelCComponent {
  private mensajeService = inject(MensajeService);
  texto = '';

  enviar(): void {
    this.mensajeService.enviar(this.texto);
  }
}
