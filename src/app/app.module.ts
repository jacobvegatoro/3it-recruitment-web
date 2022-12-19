import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrevistasComponent } from './components/entrevistas/entrevistas.component';
import { LayoutModule } from './layout/layout.module';
import { EntrevistasFormComponent } from './components/entrevistas/entrevistas-form/entrevistas-form.component';
import { FormsModule } from '@angular/forms';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { PreguntasFormComponent } from './components/preguntas/preguntas-form.component';

@NgModule({
    declarations: [
        AppComponent,
        EntrevistasComponent,
        EntrevistasFormComponent,
        PreguntasComponent,
        PreguntasFormComponent
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
})
export class AppModule { }
