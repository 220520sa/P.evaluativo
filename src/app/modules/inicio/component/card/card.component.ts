import { Component } from '@angular/core';
import { Libros } from 'src/app/models/libros';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  public info: Libros[];

  constructor(){
    this.info = [

      {
        id: "",
        nombre: "sabuezo de barkeville",
        genero: "accion",
        lanzamiento: 5,
        imagen: "https://media.reaperscans.com/file/4SRBHm/tv7xzen4t2h9dqvpjdoe4mvu.webp",
        alt: "Chanchito"
      },
      {
        id: "",
        nombre: "guia de supervivencia",
        genero: "accion",
        lanzamiento: 5,
        imagen: "https://preview.redd.it/t2wi6v8eoltc1.jpeg?auto=webp&s=a770bd58b07edbe4dbb75a881d514c020fda9ea9",
        alt: "Chanchito"
      },
      {
        id: "",
        nombre: "maldita reencarnacion",
        genero: "accion",
        lanzamiento: 5,
        imagen: "https://preview.redd.it/9433445khd0a1.jpg?width=640&crop=smart&auto=webp&s=d4146c0c8103c22b2e27b46906c327fc76745bf4",
        alt: "Chanchito"
      },

    ]
  }

}
