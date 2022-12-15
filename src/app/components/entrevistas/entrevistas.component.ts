import { Component, OnInit } from '@angular/core';
import { Entrevista } from 'src/app/models/entrevista';
import { EntrevistaService } from 'src/app/services/entrevista.service';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {

  titulo = 'Listado de entrevistas';
  entrevistas: Entrevista[];

  constructor(private service: EntrevistaService) { }

  ngOnInit() {
    this.service.listar().subscribe(entrevistas => {
      this.entrevistas = entrevistas;
    });
  }

}
