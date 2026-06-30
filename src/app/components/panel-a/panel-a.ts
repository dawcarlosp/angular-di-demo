import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContadorService } from '../../services/contador';

@Component({
  selector: 'app-panel-a',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './panel-a.html',
  styleUrl: './panel-a.css'
})
export class PanelAComponent {

  constructor(public contadorService: ContadorService) {}
}
