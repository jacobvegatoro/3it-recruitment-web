import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrevistasFormComponent } from './components/entrevistas/entrevistas-form/entrevistas-form.component';
import { EntrevistasComponent } from './components/entrevistas/entrevistas.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'entrevistas'},
  {path: 'entrevistas', component: EntrevistasComponent},
  {path: 'entrevistas/form', component: EntrevistasFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
