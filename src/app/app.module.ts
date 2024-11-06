import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// IMPORTAMOS COMPONENTES GLOBALES
import { SharedModule } from './modules/shared/shared.module';

import { environment } from 'src/environments/environments'; // vincula a la BD con la APP
import { AngularFireModule } from '@angular/fire/compat'; // trabaja con las colecciones de información
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; // trabaja con la autentificación
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // trabaja con imágenes y archivos

@NgModule({
  declarations: [
  AppComponent,
  

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // COMPONENTES GLOBALES
    SharedModule,
    // VINCULACIÓN CON FIREBASE
    AngularFireModule.initializeApp(environment.firebaseConfig), // Inicializar Firebase dentro del proyecto
    AngularFireAuthModule,
    AngularFireStorageModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
