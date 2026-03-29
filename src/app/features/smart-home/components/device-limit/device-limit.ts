import { Component, inject } from '@angular/core';

import { Chart, DoughnutController } from 'chart.js';

import { ChartComponent, IChartConfig } from '../../../../shared';
import { SmartHomeDataService } from '../../services';

Chart.register(DoughnutController);

const ROTATION = 210;
const CIRCUMFERENCE = 300;

function cssVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

@Component({
  selector: 'app-device-limit',
  imports: [ChartComponent],
  templateUrl: './device-limit.html',
  styleUrl: './device-limit.less',
})
export class DeviceLimitComponent {
  private readonly dataService: SmartHomeDataService = inject(SmartHomeDataService);
  readonly limit = this.dataService.deviceLimit;

  private get pct(): number {
    const { value, min, max } = this.limit;
    return (value - min) / (max - min);
  }

  readonly chartConfig: IChartConfig<'doughnut'> = {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [this.pct * 100, (1 - this.pct) * 100],
        backgroundColor: [cssVar('--color-red'), cssVar('--color-dark-snow')],
        borderWidth: 0,
        hoverOffset: 0,
      }],
    },
    options: {
      rotation: ROTATION,
      circumference: CIRCUMFERENCE,
      cutout: '96%',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ['endDot' as any]: { enabled: true, radius: 6, color: cssVar('--color-red') },
      },
    },
  };
}
