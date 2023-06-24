import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  host = 'http://localhost:8000/api/';

  index(token:string){
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

      let httpOptions ={
        headers: header
      }
      
    return this.http.get<any>(this.host+'myplants', httpOptions);
  }

}
