import { Component } from '@angular/core';

@Component({
  selector: 'app-explicacion',
  standalone: true,
  templateUrl: './explicacion.html',
  styleUrl: './explicacion.css'
})
export class ExplicacionComponent {

  conceptos = [
    {
      icono: '🏷️',
      titulo: '@Injectable()',
      descripcion:
        'Decorador que marca una clase como servicio inyectable. Sin él, Angular no puede manejarla.'
    },
    {
      icono: '🌍',
      titulo: 'providedIn: "root"',
      descripcion:
        'Le dice a Angular que cree UNA sola instancia del servicio para toda la aplicación (Singleton).'
    },
    {
      icono: '🔧',
      titulo: 'Inyección por constructor',
      descripcion:
        'El componente declara el servicio como parámetro del constructor y Angular lo entrega solo.'
    },
    {
      icono: '🔗',
      titulo: 'Compartición de datos',
      descripcion:
        'Varios componentes inyectan el mismo servicio y comparten su estado sin conocerse entre sí.'
    },
    {
      icono: '⚡',
      titulo: 'Inyección por función inject()',
      descripcion:
        'Alternativa moderna al constructor: se llama inject(Servicio) directamente en el cuerpo del componente. Panel B usa este enfoque.'
    }
  ];
}
