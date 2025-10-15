import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productos } from './components/productos/productos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Productos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo: string = 'APP array de objetos';

}
