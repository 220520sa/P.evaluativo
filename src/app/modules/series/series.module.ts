import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule
  ],
  exports:[
    PagesComponent,
  ]
})
export class SeriesModule { }
