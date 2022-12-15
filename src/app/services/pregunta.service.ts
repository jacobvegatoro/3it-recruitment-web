import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  private baseEndpoint = 'http://localhost:8090/api/preguntas';
  
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/jason'});
  
  constructor(private http: HttpClient) { }

  public listar(): Observable<Pregunta[]> {
    //return this.http.get<Pregunta[]>(this.baseEndpoint);
    return this.http.get(this.baseEndpoint).pipe(
      map(preguntas => {
        return preguntas as Pregunta[];
      }))
  }

  public listarPaginas(page: string, size: string): Observable<any> {
    const params = new HttpParams()
    .set('page',page)
    .set('size',size);
    return this.http.get<any>(`${this.baseEndpoint}/pagina`, {params: params})
  }

  public ver(id: number): Observable<Pregunta>{ 
    return this.http.get<Pregunta>(`${this.baseEndpoint}/${id}`);
  }

  public crear(pregunta:Pregunta): Observable<Pregunta>{
    return this.http.post<Pregunta>(this.baseEndpoint, pregunta, { headers: this.cabeceras});
  }

  public editar(pregunta:Pregunta): Observable<Pregunta>{
    return this.http.put<Pregunta>(`${this.baseEndpoint}/${pregunta.id}`, pregunta, {headers: this.cabeceras})
  }

  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

}
