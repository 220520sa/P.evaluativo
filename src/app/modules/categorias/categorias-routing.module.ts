import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AccionComponent } from './pages/accion/accion.component';
import { DramaComponent } from './pages/drama/drama.component';
import { MisterioComponent } from './pages/misterio/misterio.component';
import { RomanceComponent } from './pages/romance/romance.component';
import { CompraComponent } from './pages/compra/compra.component';
import { VentaComponent } from './pages/venta/venta.component';


const routes: Routes = [
  {
    path:"accion",component:AccionComponent
  },
  {
    path:"drama",component:DramaComponent
  },
  {
    path:"misterio",component:MisterioComponent
  },
  {
    path:"romance",component:RomanceComponent
  },
  {
    path:"venta",component:VentaComponent
  },
  {
    path:"compra",component:CompraComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
