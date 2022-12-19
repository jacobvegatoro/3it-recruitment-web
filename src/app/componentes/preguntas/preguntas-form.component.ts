import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-preguntas-form',
  templateUrl: './preguntas-form.component.html',
  styleUrls: ['./preguntas-form.component.css']
})
export class PreguntasFormComponent implements OnInit {
  public titulo: string = "Crear Pregunta";
  public pregunta: Pregunta = new Pregunta();
  public error: any;
  constructor(
    private service: PreguntaService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id'); //.toString()
      if(id){
        this.service.ver(id)
        .subscribe(pregunta => this.pregunta = pregunta)
      }
    })
  }
  public crear(): void {
    this.service.crear(this.pregunta)
      .subscribe(pregunta => {
        console.log(pregunta);
        alert(`Pregunta creada #${pregunta.id}:${pregunta.detalle}.`);
        this.router.navigate(['/preguntas']);
      }, err => {
        if (err.status === 400) {
          this.error = err.error;
          console.log(this.error);

        }
      });
  }
  
  public editar (): void {
    this.service.editar (this.pregunta)
      .subscribe(pregunta => {
        console.log(pregunta);
        alert(`Pregunta editada #${pregunta.id}:${pregunta.detalle}.`);
        this.router.navigate(['/preguntas']);
      }, err => {
        if (err.status === 400) {
          this.error = err.error;
          console.log(this.error);

        }
      });
  }


}
