import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Embarcado } from 'src/app/models/embarcado.model';

const baseUrl = 'http://localhost:8080/sysambientes/embarcado';

@Injectable({
  providedIn: 'root'
})
export class EmbarcadoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Embarcado[]> {
    console.log(this.http.get<Embarcado[]>(baseUrl));
    return this.http.get<Embarcado[]>(baseUrl);
  }

  get(id: any): Observable<Embarcado> {
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

  findByTitle(title: any): Observable<Embarcado[]> {
    return this.http.get<Embarcado[]>(`${baseUrl}?title=${title}`);
  }

}
