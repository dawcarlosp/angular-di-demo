import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContadorService } from '../../services/contador';

@Component({
  selector: 'app-panel-b',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './panel-b.html',
  styleUrl: './panel-b.css'
})
export class PanelBComponent {  
  public contadorService = inject(ContadorService);
}
