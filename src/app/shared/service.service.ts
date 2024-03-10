import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url:string = 'http://localhost:8080/auth/login';

  constructor(private http:HttpClient) { }

  select(id:Number):Observable<Event[]>{
    return this.http.get<Event[]>(`${this.url}/${id}`);
  }

  user(data: any){
    return this.http.post(`${this.url}`, data);
  }

}
