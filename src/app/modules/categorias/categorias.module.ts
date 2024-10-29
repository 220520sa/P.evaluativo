import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';

import { AccionComponent } from './pages/accion/accion.component';
import { DramaComponent } from './pages/drama/drama.component';
import { MisterioComponent } from './pages/misterio/misterio.component';
import { RomanceComponent } from './pages/romance/romance.component';
import { CardComponent } from './component/card/card.component';
import { CarruselComponent } from './component/carrusel/carrusel.component';
import { CompraComponent } from './pages/compra/compra.component';
import { VentaComponent } from './pages/venta/venta.component';


@NgModule({
  declarations: [
    AccionComponent,
    DramaComponent,
    MisterioComponent,
    RomanceComponent,
    CardComponent,
    CarruselComponent,
    CompraComponent,
    VentaComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
  ],
  exports: [
    AccionComponent,
    DramaComponent,
    MisterioComponent,
    RomanceComponent
  ]

 } )
export class CategoriasModule { }
