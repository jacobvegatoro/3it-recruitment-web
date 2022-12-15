import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrevistasComponent } from './components/entrevistas/entrevistas.component';
import { LayoutModule } from './layout/layout.module';
import { EntrevistasFormComponent } from './components/entrevistas/entrevistas-form/entrevistas-form.component';

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
        HttpClientModule
    ]
})
export class AppModule { }
