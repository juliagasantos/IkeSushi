import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PratoService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient){}
  LocationStrategy(){
    return this.http.get(`${this.apiUrl}/pratos`);
  }
}
