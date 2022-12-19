import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { EntrevistasFormComponent } from './components/entrevistas/entrevistas-form/entrevistas-form.component';
import { EntrevistasComponent } from './components/entrevistas/entrevistas.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entrevistas'},
  {path: 'entrevistas', component: EntrevistasComponent},
  {path: 'entrevistas/form', component: EntrevistasFormComponent},
  {path: 'entrevistas/form/:id', component: EntrevistasFormComponent}
];

=======
import { EntrevistasComponent } from './componentes/entrevistas/entrevistas.component';
import { PreguntasFormComponent } from './componentes/preguntas/preguntas-form.component';
import { PreguntasComponent } from './componentes/preguntas/preguntas.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'entrevistas'},
  {path:'entrevistas', component: EntrevistasComponent},
  {path:'preguntas', component: PreguntasComponent},
  {path:'preguntas/form', component: PreguntasFormComponent},
  {path:'preguntas/form/:id', component: PreguntasFormComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'preguntas'},
];
//preguntas/form
>>>>>>> 6c37a254c3abe121544985099034dacf10be8a25
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
