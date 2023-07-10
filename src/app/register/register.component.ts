import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm !: FormGroup;

  constructor(private api:AuthService, private fb:FormBuilder , private router:Router){}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name:[''],
      email:[''],
      password:[''],
      confirm_password:[''],
    })
  }

  register(){
    let data = {
      name:this.registerForm.value.name,
      email:this.registerForm.value.email,
      password:this.registerForm.value.password,
      confirm_password:this.registerForm.value.confirm_password
    }

    this.api.register(data).subscribe({
      next:(data: any)=>{
        console.log('Sikeres regisztráció');
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigate(['/login']) //sikeres regisztráció esetén login oldalra dobja a felhasználót
      }
    })
  }

}
