import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './Uhome.component.html',
  styleUrls: ['./Uhome.component.scss']
})
export class UhomeComponent implements OnInit{

  plantForm!:FormGroup;
  plants!:any;
  newUser!:any;
  myPlant!:any;
  constructor(private api : ApiService ){}

  ngOnInit() {
    this.index();
  }

  index(){
    let jsonUserData : any = localStorage.getItem("currentUser")
    let currentUser = JSON.parse(jsonUserData);
    this.api.index(currentUser.token).subscribe({
      next:(data: any)=>{
        this.plants = data;
        console.log(this.plants);

      }

    })

    if(this.plants = null){
      this.newUser = true;
      this.myPlant = false;
    }else{
      this.newUser = false;
      this.myPlant = true;
    }

}

    addPlant(){

    }


/* popoverVisible:any;
    popover(){
      this.popoverVisible= !this.popoverVisible;
    }
 */
  }

