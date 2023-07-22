import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { WaterService } from 'src/app/service/water.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit{
  title = 'ng-chart';
  chart: any = [];
  result: any;
  wateringData: any;
  wateringNumber: any;

  constructor(private service:WaterService){}

  ngOnInit() {
    let jsonUserData: any = localStorage.getItem("currentUser");
    let currentUser = JSON.parse(jsonUserData);
    this.service.index(currentUser.token).subscribe((res) => {
      this.result = res;
      this.wateringData = this.result.map((water: any) => water.created_at);
      this.wateringNumber = this.result.map((water: any) => water.quantity);
      console.log(this.wateringData);
      console.log(this.wateringNumber);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.wateringData,
          datasets: [
            {
              data: this.wateringNumber,
              borderColor: '#23CED9',
              label: 'Dátum',
              backgroundColor: 'rgba(93, 175, 89, 0.1)',
              borderWidth: 3,
            },
          ],
        },
      });
    });

  }

}
