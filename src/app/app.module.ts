import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { BotonComponent } from './boton/boton.component';
import { ListaComponent } from './lista/lista.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    BotonComponent,
    ListaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
