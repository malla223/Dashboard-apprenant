import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Apprenant } from '../apprenant';


@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  private baseURL = "http://localhost:8080/api/apprenant";

  constructor(private httpClient: HttpClient) { }

  getApprenantList(): Observable<Apprenant[]>{
    return this.httpClient.get<Apprenant[]>(`${this.baseURL}`);
  }
  

  createApprenant(apprenant: Apprenant): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, apprenant);
  }

  getApprenantById(id: any): Observable<Apprenant>{
    return this.httpClient.get<Apprenant>(`${this.baseURL}/${id}`);
  }

  updateApprenant(id: any, apprenant: Apprenant): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, apprenant);
  }

  deleteApprenant(id: any): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
