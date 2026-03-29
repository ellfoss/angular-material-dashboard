import { AfterViewInit, Component, DestroyRef, ElementRef, inject, viewChild } from '@angular/core';

import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  Tooltip,
} from 'chart.js';

import { SmartHomeDataService } from '../../services';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

@Component({
  selector: 'app-home-bar-chart',
  templateUrl: './home-bar-chart.html',
  styleUrl: './home-bar-chart.less',
})
export class HomeBarChartComponent implements AfterViewInit {
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly dataService: SmartHomeDataService = inject(SmartHomeDataService);

  readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart(): void {
    const ctx: CanvasRenderingContext2D = this.canvasRef().nativeElement.getContext('2d')!;
    const { labels, data } = this.dataService.barChartData;

    const chart: Chart = new Chart(ctx, {
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
          tooltip: { enabled: true },
        },
        scales: {
          x: {
            border: { display: false },
            grid: { display: false },
            ticks: { color: '#7b809a', font: { size: 12 } },
          },
          y: {
            border: { display: false },
            grid: { color: '#e9eaed' },
            ticks: { color: '#7b809a', font: { size: 12 }, stepSize: 20 },
            min: 0,
            max: 60,
          },
        },
      },
    });

    this.destroyRef.onDestroy((): void => { chart.destroy(); });
  }
}
