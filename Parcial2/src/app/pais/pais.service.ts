import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from './pais';
@Injectable({
  providedIn: 'root'
})
export class PaisService implements OnInit{
public apiUrl:string= environment.baseUrl;
constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getPaises();
  }
getPaises():Observable<Pais[]>{
  return this.http.get<Pais[]>(this.apiUrl)
}

}
