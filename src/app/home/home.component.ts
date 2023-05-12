import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.timeLine();
  }

  timeLine(){
    let observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          entry.target.classList.add('show-me');
        }else{
          entry.target.classList.remove('show-me');
        }
      })
    })
    let hiddenElements = document.querySelectorAll('.section');
    hiddenElements.forEach((el)=> observer.observe(el));
  }

}
