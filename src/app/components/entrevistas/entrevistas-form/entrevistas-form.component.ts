import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entrevista } from 'src/app/models/entrevista';
import { EntrevistaService } from 'src/app/services/entrevista.service';

@Component({
  selector: 'app-entrevistas-form',
  templateUrl: './entrevistas-form.component.html',
  styleUrls: ['./entrevistas-form.component.css']
})
export class EntrevistasFormComponent implements OnInit {

  titulo = "Crear Entrevistas";

  entrevista: Entrevista = new Entrevista();

  constructor(private service: EntrevistaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public crear(): void {
    this.service.crear(this.entrevista).subscribe(entrevista => {
      console.log(entrevista);
      alert(`Entrevista ${entrevista.id} creada con éxito`);
      this.router.navigate(['/entrevistas']);
    });
  }

}
