import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formateur } from '../formateur';

@Injectable({
  providedIn: 'root'
})
export class FormatteurService {

  private baseurl = "http://localhost:8080/apis/formateur";

  constructor(private httpClient: HttpClient) { }

  get_FList(): Observable<Formateur[]>{
    return this.httpClient.get<Formateur[]>(`${this.baseurl}`);
  }
  

  create_F(f: Formateur): Observable<Object>{
    return this.httpClient.post(`${this.baseurl}`, f);
  }

  get_FById(id: any): Observable<Formateur>{
    return this.httpClient.get<Formateur>(`${this.baseurl}/${id}`);
  }

  updateF(id: any, f: Formateur): Observable<Object>{
    return this.httpClient.put(`${this.baseurl}/${id}`, f);
  }

  deleteF(id: any): Observable<Object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

}
