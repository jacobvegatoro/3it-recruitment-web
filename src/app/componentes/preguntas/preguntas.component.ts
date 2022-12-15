import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  public titulo = 'Listado Preguntas';
  public preguntas: Pregunta[];

  constructor(private service: PreguntaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(preguntas => this.preguntas=preguntas);

  }

}
