import { Component, signal, OnInit, resource } from '@angular/core';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
})
export class Productos {

  titulo: string = 'Productos Resource API';

  productos = resource({
    loader: () => {
      return fetch('http://20.81.129.60:8081/productos').then((result) => result.json());
    },
  });
}
