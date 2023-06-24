import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './Uhome.component.html',
  styleUrls: ['./Uhome.component.scss']
})
export class UhomeComponent implements OnInit{

  plantForm!:FormGroup;
  plants!:any;
  constructor(private api : ApiService ){}

  ngOnInit() {
    this.index();
  }

  index(){
    let jsonUserData : any = localStorage.getItem("currentUser")
    let currentUser = JSON.parse(jsonUserData);
    this.api.index(currentUser.token).subscribe({
      next:data=>{
        this.plants = data;
        console.log(this.plants);
      }
    })

    }

    addPlant(){

    }
  }

