import { Component, OnDestroy, OnInit} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { ContadorService } from '../../services/contador';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-panel-a',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './panel-a.html',
  styleUrl: './panel-a.css'
})
export class PanelAComponent implements OnInit, OnDestroy{
    valorContador: number = 0;
  private sub!: Subscription; 

  constructor(public contadorService: ContadorService) {}

  ngOnDestroy(): void {
     this.sub.unsubscribe();
  }
  ngOnInit(): void {
       this.sub = this.contadorService.contador$.subscribe(valor => {
      this.valorContador = valor;
    });
  }
}
