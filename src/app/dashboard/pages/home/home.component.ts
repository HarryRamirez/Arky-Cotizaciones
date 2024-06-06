import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit{


  public chart1: Chart;
  public chart2: Chart;


  ngOnInit(): void {
  
    const data1 = {
      labels: ['Aceptadas', 'Pendientes', 'Recahzadas'],
      datasets: [{
        label: 'total',
        data: [500, 150, 90],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      }]
  }

  this.chart1 = new Chart('chart1', {
    type: 'bar' as ChartType,
    data: data1,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



  const data2 = {
    labels: ['Aceptadas', 'Pendientes', 'Recahzadas'],
    datasets: [{
      label: 'total',
      data: [1150, 600, 400],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(255, 99, 132, 0.2)'
      ],
      borderColor: [
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(255, 99, 132)'
      ],
      borderWidth: 1
    }]
}

this.chart2 = new Chart('chart2', {
  type: 'bar' as ChartType,
  data: data2,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});


}
}