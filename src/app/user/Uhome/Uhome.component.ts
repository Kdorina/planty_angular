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

  constructor(private api : ApiService ){}

  ngOnInit() {
    this.index();
  }

  images:any;
  index(){
    this.api.index().subscribe({
      next:data=>{
        this.images = data;
        console.log(data);
      }
    })

    }

    addPlant(){

    }
  }

