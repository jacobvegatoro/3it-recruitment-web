import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasFormComponent } from './components/entrevistas/entrevistas-form/entrevistas-form.component';
import { EntrevistasComponent } from './components/entrevistas/entrevistas.component';
import { PreguntasFormComponent } from './components/preguntas/preguntas-form.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entrevistas'},
  {path: 'entrevistas', component: EntrevistasComponent},
  {path: 'entrevistas/form', component: EntrevistasFormComponent},
  {path: 'entrevistas/form/:id', component: EntrevistasFormComponent},
  {path: 'preguntas', component: PreguntasComponent},
  {path: 'preguntas/form', component: PreguntasFormComponent},
  {path: 'preguntas/form/:id', component: PreguntasFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
