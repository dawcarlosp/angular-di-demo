import { Component } from '@angular/core';
import { PanelEComponent } from '../panel-e/panel-e';
import { PanelFComponent } from '../panel-f/panel-f';

@Component({
  selector: 'app-padre-compartir',
  standalone: true,
  imports: [PanelEComponent, PanelFComponent],
  templateUrl: './padre-compartir.html',
  styleUrl: './padre-compartir.css'
})
export class PadreCompartirComponent {
  mensaje = '';
}
