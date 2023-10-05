import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnDestroy {

  results?: any[] = [
    {
      "name": "Game 1",
      "value": 20
    },
    {
      "name": "Game 2",
      "value": 25
    },
    {
      "name": "Game 3",
      "value": 15
    },
    {
      "name": "Game 4",
      "value": 30
    }
  ];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Games';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votes';

  colorScheme = 'nightLights'

  interval;

  constructor() {
    this.interval = setInterval(() => {
      console.log('tick');
      const newResults = [...this.results!];
      for (let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500);
      }
      this.results = [...newResults];
    }, 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
