import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:"",component: InicioComponent
  },
 
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
 
  {
    path:"",loadChildren:()=>import('./modules/categorias/categorias.module').then(m=>m.CategoriasModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/series/series.module').then(m=>m.SeriesModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
