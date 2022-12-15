import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrevistasComponent } from './componentes/entrevistas/entrevistas.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';
import { LayoutModule } from './layout/layout.module';
import { PreguntasFormComponent } from './componentes/preguntas/preguntas-form/preguntas-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrevistasComponent,
    PreguntasComponent,
    PreguntasFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
