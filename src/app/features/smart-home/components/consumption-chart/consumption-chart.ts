import { Component, inject } from '@angular/core';

import { ArcElement, Chart, DoughnutController, Tooltip } from 'chart.js';

import { ChartComponent, IChartConfig } from '../../../../shared';
import { IConsumptionItem } from '../../interfaces';
import { SmartHomeDataService } from '../../services';

Chart.register(DoughnutController, ArcElement, Tooltip);

@Component({
  selector: 'app-consumption-chart',
  imports: [ChartComponent],
  templateUrl: './consumption-chart.html',
  styleUrl: './consumption-chart.less',
})
export class ConsumptionChartComponent {
  private readonly dataService: SmartHomeDataService = inject(SmartHomeDataService);

  readonly items: IConsumptionItem[] = this.dataService.consumptionItems;
  readonly total: number = this.dataService.consumptionTotal;

  readonly chartConfig: IChartConfig<'doughnut'> = {
    type: 'doughnut',
    data: {
      labels: this.items.map((i: IConsumptionItem): string => i.label),
      datasets: [{
        data: this.items.map((i: IConsumptionItem): number => i.watts),
        backgroundColor: this.items.map((i: IConsumptionItem): string => i.color),
        borderWidth: 0,
        hoverOffset: 4,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '80%',
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
    },
  };
}
