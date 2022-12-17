import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  error: any;

  constructor(private service: EntrevistaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      if (id) {
        this.service.ver(id).subscribe(entrevista => this.entrevista = entrevista)
      }
    })
  }

  public crear(): void {
    this.service.crear(this.entrevista).subscribe(entrevista => {
      console.log(entrevista);
      alert(`Entrevista ${entrevista.id} creada con éxito`);
      this.router.navigate(['/entrevistas']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

  public editar(): void {
    this.service.editar(this.entrevista).subscribe(entrevista => {
      console.log(entrevista);
      alert(`Entrevista ${entrevista.id} actualzada con éxito`);
      this.router.navigate(['/entrevistas']);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }
}

