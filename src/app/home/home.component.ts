import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  ngOnInit(): void {
    this.timeLine();
    this.scroll();
    this.topScroll();
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

  scroll(){
    let upButton = document.getElementById('upButton') as HTMLElement;
    window.onscroll = function scrollFunction(){
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ){
          upButton.style.display = "block";
        }else{
          upButton.style.display = "none";
        }
      }
    }

  topScroll(){
      document.body.scrollTop = 0 ;
      document.documentElement.scrollTop = 0;
    }

}
