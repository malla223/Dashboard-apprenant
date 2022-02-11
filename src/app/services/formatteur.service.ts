import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from '../formateur';

@Injectable({
  providedIn: 'root'
})
export class FormatteurService {

  private baseurl = "http://localhost:8080/api/formateur";

  constructor(private httpClient: HttpClient) { }

  get_FList(): Observable<Formateur[]>{
    return this.httpClient.get<Formateur[]>(`${this.baseurl}`);
  }
  

  create_F(formateur: Formateur): Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`, formateur);
  }

  get_FById(id: any): Observable<Formateur>{
    return this.httpClient.get<Formateur>(`${this.baseurl}/${id}`);
  }

  updateF(id: any, formateur: Formateur): Observable<Object>{
    return this.httpClient.put(`${this.baseurl}/${id}`, formateur);
  }

  deleteF(id: any): Observable<Object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

}
