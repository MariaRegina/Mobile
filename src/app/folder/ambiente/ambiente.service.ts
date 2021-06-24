import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ambiente } from 'src/app/models/ambiente.model';

const baseUrl = 'http://localhost:8080/sysambientes/ambiente';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ambiente[]> {
    console.log(this.http.get<Ambiente[]>(baseUrl));
    return this.http.get<Ambiente[]>(baseUrl);
  }

  get(id: any): Observable<Ambiente> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Ambiente[]> {
    return this.http.get<Ambiente[]>(`${baseUrl}?title=${title}`);
  }

}
