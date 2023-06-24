import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm !: FormGroup;

  constructor( private api:AuthService , private fb: FormBuilder, private router:Router){}

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

        console.log(data.data.token);
        console.log(data.data.name);

        if(data.success) {

        localStorage.setItem('currentUser', JSON.stringify({token: data.data.token, name: data.data.name}));

        this.router.navigate(['/user/home']);

        }
      else
      {
        alert('A belépés sikertelen!');
    }

      }
    })
  }
}
