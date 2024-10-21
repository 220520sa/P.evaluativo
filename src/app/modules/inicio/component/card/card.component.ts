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
        nombre: "Solo Leveling",
        genero: "accion",
        lanzamiento: 5,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd55JkOTv4F3J-83NPVAZY0033oVebedZi1w&s",
        alt: "Chanchito"
      },
      {
        id: "",
        nombre: "Solo Leveling",
        genero: "accion",
        lanzamiento: 5,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd55JkOTv4F3J-83NPVAZY0033oVebedZi1w&s",
        alt: "Chanchito"
      },
      {
        id: "",
        nombre: "Solo Leveling",
        genero: "accion",
        lanzamiento: 5,
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd55JkOTv4F3J-83NPVAZY0033oVebedZi1w&s",
        alt: "Chanchito"
      },

    ]
  }

}
