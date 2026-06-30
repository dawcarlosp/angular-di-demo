import { Component, inject } from '@angular/core';
import { MensajeService } from '../../services/mensaje';

@Component({
  selector: 'app-panel-d',
  standalone: true,
  templateUrl: './panel-d.html',
  styleUrl: './panel-d.css'
})
export class PanelDComponent {
  private mensajeService = inject(MensajeService);
  mensaje = this.mensajeService.mensaje;
}
