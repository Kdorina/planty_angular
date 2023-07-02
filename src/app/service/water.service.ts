import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterService {


  constructor(private http : HttpClient) { }

  host = 'http://localhost:8000/api/';

  index(token:string){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });

    const httpOptions = {
      headers : httpHeaders
    };


    return this.http.get<any>(this.host+'water', httpOptions);
  }

}
