import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrevista } from '../models/entrevista';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  private baseEndpoint = 'http://localhost:8090/api/entrevistas';
  
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/jason'});
  constructor(private http: HttpClient) { }

  public listar(): Observable<Entrevista[]> {
    return this.http.get<Entrevista[]>(this.baseEndpoint);
  }

  public ver(id: number): Observable<Entrevista>{
    return this.http.get<Entrevista>(`${this.baseEndpoint}/${id}`);
  }

  public crear(entrevista:Entrevista): Observable<Entrevista>{
    return this.http.post<Entrevista>(this.baseEndpoint, entrevista, { headers: this.cabeceras});
  }

  public editar(entrevista:Entrevista): Observable<Entrevista>{
    return this.http.put<Entrevista>(`${this.baseEndpoint}/${entrevista.id}`, entrevista, {headers: this.cabeceras})
  }

  public eliminar(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
}
