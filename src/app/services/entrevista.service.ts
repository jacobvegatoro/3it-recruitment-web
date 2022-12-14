import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrevistaService {

  private baseEndpoint = 'http://localhost:8090/api/entrevistas';
  constructor(private http: HttpClient) { }
}
