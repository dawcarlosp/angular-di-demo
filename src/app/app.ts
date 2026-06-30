import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { ExplicacionComponent } from './components/explicacion/explicacion';
import { PanelAComponent } from './components/panel-a/panel-a';
import { PanelBComponent } from './components/panel-b/panel-b';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ExplicacionComponent, PanelAComponent, PanelBComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
