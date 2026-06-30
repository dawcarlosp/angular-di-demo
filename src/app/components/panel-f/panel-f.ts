import { Component, input } from '@angular/core';

@Component({
  selector: 'app-panel-f',
  standalone: true,
  templateUrl: './panel-f.html',
  styleUrl: './panel-f.css'
})
export class PanelFComponent {
  mensaje = input('');
}
