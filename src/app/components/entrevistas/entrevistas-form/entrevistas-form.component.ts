import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrevistas-form',
  templateUrl: './entrevistas-form.component.html',
  styleUrls: ['./entrevistas-form.component.css']
})
export class EntrevistasFormComponent implements OnInit {

  titulo = "Crear Entrevistas";
  constructor() { }

  ngOnInit(): void {
  }

}
