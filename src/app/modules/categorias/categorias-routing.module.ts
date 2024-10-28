import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AccionComponent } from './pages/accion/accion.component';
import { DramaComponent } from './pages/drama/drama.component';
import { MisterioComponent } from './pages/misterio/misterio.component';
import { RomanceComponent } from './pages/romance/romance.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
