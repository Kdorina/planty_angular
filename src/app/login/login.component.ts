import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm !: FormGroup;

  constructor( private api:AuthService , private fb: FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

  login(){
    let data ={
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.api.login(data).subscribe({
      next:data=>{
        console.log('sikeres bejelentkezes')
      }
    })
  }
}
