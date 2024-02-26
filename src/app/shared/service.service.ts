import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './model/Client';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url:string = 'http://localhost:8080/agenda';

  constructor(private http:HttpClient) { }

  select(id:Number):Observable<Event[]>{
    return this.http.get<Event[]>(`${this.url}/${id}`);


  }
}
