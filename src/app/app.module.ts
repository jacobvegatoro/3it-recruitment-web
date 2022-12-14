import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrevistasComponent } from './components/entrevistas/entrevistas.component';
import { LayoutModule } from './layout/layout.module';
import { NavbarComponent } from "./layout/navbar/navbar.component";

@NgModule({
    declarations: [
        AppComponent,
        EntrevistasComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
    ]
})
export class AppModule { }
