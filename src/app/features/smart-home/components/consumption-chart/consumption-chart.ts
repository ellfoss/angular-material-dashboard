import { Component, inject } from '@angular/core';

import { ArcElement, Chart, DoughnutController, Tooltip } from 'chart.js';

import { ChartComponent, IChartConfig } from '../../../../shared';
import { IConsumptionItem } from '../../interfaces';
import { SmartHomeDataService } from '../../services';

Chart.register(DoughnutController, ArcElement, Tooltip);

function resolveCssVar(value: string): string {
  const match = value.match(/^var\((--[\w-]+)\)$/);
  return match
    ? getComputedStyle(document.documentElement).getPropertyValue(match[1]).trim()
    : value;
}

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
        data: this.items.map((i: IConsumptionItem): number => i.percentage),
        backgroundColor: this.items.map((i: IConsumptionItem): string => resolveCssVar(i.color)),
        borderWidth: 5,
        hoverOffset: 4,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '90%',
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: true,
          callbacks: {
            label: (item): string => ` ${item.formattedValue}%`,
          },
        },
      },
    },
  };
}
