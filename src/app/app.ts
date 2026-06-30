import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { ExplicacionComponent } from './components/explicacion/explicacion';
import { PanelAComponent } from './components/panel-a/panel-a';
import { PanelBComponent } from './components/panel-b/panel-b';
import { PanelCComponent } from './components/panel-c/panel-c';
import { PanelDComponent } from './components/panel-d/panel-d';
import { PadreCompartirComponent } from './components/padre-compartir/padre-compartir';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ExplicacionComponent, PanelAComponent, PanelBComponent, PanelCComponent, PanelDComponent, PadreCompartirComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
