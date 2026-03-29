import { Component, computed, input } from '@angular/core';

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';

import { ChartComponent, IChartConfig } from '../../../../shared';
import { IChartCard } from '../../interfaces';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  Filler,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
);

Chart.defaults.font.family = 'Roboto';
Chart.defaults.font.size = 14;
Chart.defaults.font.weight = 400;

@Component({
  selector: 'app-chart-card',
  imports: [ChartComponent],
  templateUrl: './chart-card.html',
  styleUrl: './chart-card.less',
})
export class ChartCardComponent {
  readonly card = input.required<IChartCard>();

  readonly chartConfig = computed((): IChartConfig => {
    const config = this.card().chartConfig;
    const isBar: boolean = config.type === 'bar';

    return {
      type: config.type,
      data: {
        labels: config.labels,
        datasets: [
          isBar
            ? {
                data: config.data,
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: 4,
                borderSkipped: false,
                barThickness: 6,
              }
            : {
                data: config.data,
                borderColor: 'rgba(255,255,255,0.9)',
                borderWidth: 2,
                tension: 0,
                fill: false,
                pointRadius: 4,
                pointBackgroundColor: 'rgba(255,255,255,0.9)',
                pointBorderWidth: 0,
              },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { mode: 'index' },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(!isBar ? { ['dashedGrid' as any]: { verticalLines: false } } : {}),
        },
        scales: {
          x: {
            border: { display: false },
            grid: { display: false },
            ticks: { color: isBar ? 'rgba(255,255,255,0.5)' : 'white' },
          },
          y: {
            border: { display: false },
            grid: { display: false },
            ...(isBar
              ? { min: 0, max: 60, ticks: { stepSize: 20, color: 'rgba(255,255,255,0.5)' } }
              : { min: 0, max: 600, ticks: { stepSize: 200, color: 'white' } }),
          },
        },
      },
    };
  });
}
