import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ODGS904Angular');
  saludo = "Hola Mundo";

  pelicula={
      titulo: 'Spider_Man',
      fechaLanzamiento: new Date(),
      precio: 123.33
    }

    DuplicarNumero(valor:number):number{
      return valor*2
    }
}
