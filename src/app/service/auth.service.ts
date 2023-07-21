import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host = 'http://localhost:8000/api/';

  constructor(private http : HttpClient) { }

  login(data:any){

    let header = new HttpHeaders(
    {
      'Content-Type':'application/json',
      'Accept':'application/json'
    });
    let httpOptions ={
      headers: header
    }
    let url = this.host+'login'

    return this.http.post<any>(url, data, httpOptions);
  }
  register(data:any){
    let header = new HttpHeaders(
      {
        'Content-Type':'application/json',
        'Accept':'application/json'
      });
      let httpOptions ={
        headers: header
      }
      let url = this.host+'register'

      return this.http.post<any>(url, data, httpOptions);
  }
  logout(name:any, token:string){

    let authData =
    {
      name: name,
      token: token
    }
    let header = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      });
      let httpOptions ={
        headers: header
      }
      let url = this.host+'logout'

      return this.http.post<any>(url, authData, httpOptions);
  }

  isLoggedIn(){
    if(localStorage.getItem('currentUser') === null){
      return false;
    }
    let data:any = localStorage.getItem('currentUser');
    let userData = JSON.parse(data);
    let token = userData.token;
    return token;
  }
}
