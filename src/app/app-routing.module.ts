import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasComponent } from './componentes/entrevistas/entrevistas.component';
import { PreguntasFormComponent } from './componentes/preguntas/preguntas-form.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'entrevistas'},
  {path:'entrevistas', component: EntrevistasComponent},
  {path:'preguntas', component: PreguntasComponent},
  {path:'preguntas/form', component: PreguntasFormComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'preguntas'},
];
//preguntas/form
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
