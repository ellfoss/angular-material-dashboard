import { AfterViewInit, Component, DestroyRef, ElementRef, inject, input, viewChild } from '@angular/core';

import { Chart, Plugin } from 'chart.js';

import { IChartConfig } from './interfaces';

const dashedGridPlugin: Plugin = {
  id: 'dashedGrid',
  beforeDatasetsDraw(chart: Chart): void {
    const { ctx: c, chartArea, scales } = chart;
    if (!chartArea) return;
    c.save();
    c.strokeStyle = '#e9eaed';
    c.setLineDash([4, 4]);
    c.lineWidth = 1;

    const xScale = scales['x'];
    if (xScale && xScale.ticks.length >= 2) {
      const n: number = xScale.ticks.length;
      const step: number = xScale.getPixelForTick(1) - xScale.getPixelForTick(0);
      for (let i: number = 0; i <= n; i++) {
        const x: number = i === 0
          ? xScale.getPixelForTick(0) - step / 2
          : i === n
            ? xScale.getPixelForTick(n - 1) + step / 2
            : (xScale.getPixelForTick(i - 1) + xScale.getPixelForTick(i)) / 2;
        c.beginPath();
        c.moveTo(x, chartArea.top);
        c.lineTo(x, chartArea.bottom);
        c.stroke();
      }
    }

    const yScale = scales['y'];
    if (yScale) {
      yScale.ticks.forEach((_: unknown, i: number): void => {
        const y: number = yScale.getPixelForTick(i);
        c.beginPath();
        c.moveTo(chartArea.left, y);
        c.lineTo(chartArea.right, y);
        c.stroke();
      });
    }

    c.restore();
  },
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.html',
  styleUrl: './chart.less',
})
export class ChartComponent implements AfterViewInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly config = input.required<IChartConfig<any>>();

  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly canvasRef = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  ngAfterViewInit(): void {
    const ctx: CanvasRenderingContext2D = this.canvasRef().nativeElement.getContext('2d')!;
    const { type, data, options } = this.config();

    const chart: Chart = new Chart(ctx, { type, data, options, plugins: [dashedGridPlugin] });

    this.destroyRef.onDestroy((): void => { chart.destroy(); });
  }
}
