import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {

  titulo = 'Listado de entrevistas';

  constructor() { }

  ngOnInit(): void {
  }

}
