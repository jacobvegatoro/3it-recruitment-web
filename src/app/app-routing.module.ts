import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasComponent } from './componentes/entrevistas/entrevistas.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'entrevistas'},
  {path:'entrevistas', component: EntrevistasComponent},
  {path:'preguntas', component: PreguntasComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'preguntas'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
