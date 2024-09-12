import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-chart-demo',
  standalone: true,
  imports: [
    CanvasJSAngularChartsModule
  ],
  templateUrl: './chart-demo.component.html',
  styleUrl: './chart-demo.component.css'
})
export class ChartDemoComponent {
  chartOptions = {
    title: {
      text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple", y: 10 },
        { label: "Orange", y: 15 },
        { label: "Banana", y: 25 },
        { label: "Mango", y: 30 },
        { label: "Grape", y: 28 }
      ]
    }]
  };

  MovieData: any = {
    title: {
      text: "Movie Name with Year"
    },
    data: [{
      type: "column",
      dataPoints: [
        // { label: '3 idiots', y: 105 }
      ]
    }]
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies').subscribe((response: any) => {
      console.log("response is ", response);

      const dataPoint = response.map((movie: any) => {
        return { label: movie.Title, y: +movie.Year }
      });
      this.MovieData.data[0].dataPoints = dataPoint;
      console.log(this.MovieData)
    })
  }
}
