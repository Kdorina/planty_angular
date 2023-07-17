import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class UserNavbarComponent  implements OnInit{

  constructor(private auth: AuthService, private router : Router){}

  ngOnInit(): void {
    this.isLoggedIn();
    this.logout();
  }

  userName:any;
  isLoggedIn(){
    let jsonCurrentUser: any = localStorage.getItem("currentUser");
    let currentUser = JSON.parse(jsonCurrentUser);
    this.userName = currentUser.name;

    }

  logout(){
    let jsonCurrentUser: any = localStorage.getItem("currentUser");
    let currentUser = JSON.parse(jsonCurrentUser);
    this.auth.logout(currentUser.email, currentUser.token).subscribe({
      next:data=>{
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
      }
    })
  }

}
