import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { WaterService } from 'src/app/service/water.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './Uhome.component.html',
  styleUrls: ['./Uhome.component.scss']
})
export class UhomeComponent implements OnInit{

  plantForm!:FormGroup;
  waterForm!:FormGroup;
  plants!:any;
  newUser!:any;
  myPlant!:any;
  constructor(private api : ApiService , private watering: WaterService){}

  ngOnInit() {
    this.index();
    this.reminder();
    this.waterChart();
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

popoverVisible = false;


addWater(){

}
close(){
  
}

message:any;
  reminder(){
    this.watering.reminder().subscribe({
      next:data=>{
        console.log(data);
        this.message = data;
      }
    })
  }

wateringDate:any;
  waterChart(){
    let jsonUserData : any = localStorage.getItem("currentUser")
    let currentUser = JSON.parse(jsonUserData);
    this.watering.index(currentUser.token).subscribe({
      next:(data: any)=>{
       console.log(data);
        this.wateringDate= data;
      }

    })
  }

  }

