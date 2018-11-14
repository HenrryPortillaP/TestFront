import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import { Alumno } from './home/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'http://localhost:37121/Backend/api/alumnos/pruebaapi2';
  alumno : Alumno[];
  constructor(private http:HttpClient) { 
   
  }
  getUsers(): Observable<Alumno>{
   /* return this.http.post('http://localhost:37121/Backend/api/alumnos/pruebaapi');*/
   return this.http.post<Alumno>(this.url, {
     headers: new HttpHeaders({
       'Content-Type':'application/json'
     })
   })
;
  }
}
