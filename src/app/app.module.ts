import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrevistasComponent } from './components/entrevistas/entrevistas.component';
import { LayoutModule } from './layout/layout.module';
import { EntrevistasFormComponent } from './components/entrevistas/entrevistas-form/entrevistas-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        EntrevistasComponent,
        EntrevistasFormComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        HttpClientModule,
        FormsModule
    ]
=======
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrevistasComponent } from './componentes/entrevistas/entrevistas.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';
import { LayoutModule } from './layout/layout.module';
import { PreguntasFormComponent } from './componentes/preguntas/preguntas-form.component';


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
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
>>>>>>> 6c37a254c3abe121544985099034dacf10be8a25
})
export class AppModule { }
