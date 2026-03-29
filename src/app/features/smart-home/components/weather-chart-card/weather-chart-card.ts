import { Component, inject } from '@angular/core';

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Tooltip,
} from 'chart.js';

import { ChartComponent, IChartConfig } from '../../../../shared';
import { SmartHomeDataService } from '../../services';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

@Component({
  selector: 'app-weather-chart-card',
  imports: [ChartComponent],
  templateUrl: './weather-chart-card.html',
  styleUrl: './weather-chart-card.less',
})
export class WeatherChartCardComponent {
  private readonly dataService: SmartHomeDataService = inject(SmartHomeDataService);

  readonly weather = this.dataService.weather;

  readonly chartConfig: IChartConfig = (() => {
    const { labels, data } = this.dataService.barChartData;
    return {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: '#344767',
          borderRadius: 4,
          borderSkipped: false,
          barThickness: 8,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            callbacks: {
              label: (item): string => `Watts: ${item.raw}`,
            },
          },
        },
        scales: {
          x: {
            border: { display: false },
            grid: { display: false },
            ticks: { color: '#7b809a', font: { size: 12 } },
          },
          y: {
            border: { display: false },
            grid: { display: false },
            ticks: { color: '#7b809a', font: { size: 12 }, stepSize: 5 },
            min: 0,
            max: 35,
          },
        },
      },
    };
  })();
}
