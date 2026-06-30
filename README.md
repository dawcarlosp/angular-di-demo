# Apartados originales
 6 Servicios e Inyección de Dependencias 
Investigar: 
• Services.  
• Injectable.  
• Dependency Injection.  
• Inyección mediante constructor.  
• providedIn.  
• Compartición de datos entre componentes.  

# Angular — Servicios e Inyección de Dependencias

Aplicación didáctica que demuestra visualmente los conceptos fundamentales de **Servicios** e **Inyección de Dependencias** (DI) en Angular.

## Conceptos trabajados

### 1. @Injectable
Decorador que marca una clase como un servicio que Angular puede gestionar dentro de su sistema de inyección de dependencias. Sin él, Angular no puede instanciar ni entregar el servicio.

```typescript
@Injectable({
  providedIn: 'root'
})
export class ContadorService { ... }
```

### 2. providedIn: 'root'
Registra el servicio en el inyector raíz de la aplicación. Angular crea **una única instancia** (singleton) compartida por todos los componentes que la soliciten.

### 3. Inyección por constructor
El componente declara el servicio como parámetro de su constructor y Angular lo entrega automáticamente. El componente nunca llama a `new Servicio()`.

```typescript
export class PanelAComponent {
  constructor(public contadorService: ContadorService) {}
}
```

### 4. Inyección por función inject()
Alternativa moderna a la inyección por constructor. Se importa `inject` desde `@angular/core` y se llama directamente en el cuerpo del componente. Panel B usa este enfoque.

```typescript
export class PanelBComponent {
  public contadorService = inject(ContadorService);
}
```

Ventajas: no necesita `constructor`, funciona en `pipe()` y `guard` donde no hay constructores, y el código es más conciso.

### 5. Dependency Injection (DI)
Patrón de diseño donde las dependencias se inyectan desde fuera. Angular tiene su propio sistema de DI que permite desacoplar componentes de sus dependencias, facilitando el testing y la reutilización.

### 6. Compartición de datos entre componentes
Dos componentes sin relación padre-hijo no pueden usar `@Input`/`@Output`. La solución es un servicio compartido con un `BehaviorSubject`:

- `PanelAComponent` modifica el contador (botones + / - / reiniciar)
- `PanelBComponent` observa el mismo valor en tiempo real
- Ambos inyectan el mismo `ContadorService` sin conocerse entre sí

### 7. BehaviorSubject
Canal reactivo de RxJS que:
- Guarda el valor actual
- Notifica automáticamente a todos los suscriptores cuando cambia
- Los componentes se suscriben con el pipe `| async` (sin `.subscribe()` manual)

---

## Estructura del proyecto

```
src/app/
├── services/
│   └── contador.service.ts          ← Servicio central (@Injectable)
├── components/
│   ├── hero/                         ← Portada visual de la app
│   ├── panel-a/                      ← Botones: modifica el contador
│   ├── panel-b/                      ← Solo lectura: refleja el valor
│   └── explicacion/                  ← Tarjetas de conceptos clave
├── app.component.ts                  ← Componente raíz
├── app.component.html
└── app.component.css
```

## Requisitos

- Node.js 18+
- Angular CLI 18+ (`npm install -g @angular/cli`)

## Desarrollo

```bash
ng serve
```

Navega a `http://localhost:4200/`. La app recarga automáticamente al modificar cualquier archivo.

## Build

```bash
ng build
```

Genera los artefactos en `dist/`.

---

Proyecto educativo — Alumno 6
