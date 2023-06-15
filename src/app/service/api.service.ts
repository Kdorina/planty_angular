import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  host = 'http://localhost:8000/api/';

  index(){
    return this.http.get<any>(this.host+'plants');
  }

}
