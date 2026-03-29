import { Component } from '@angular/core';

import { ChartCardComponent } from '../chart-card/chart-card';
import { IChartCard } from '../interfaces';

@Component({
  selector: 'app-charts-grid',
  imports: [ChartCardComponent],
  templateUrl: './charts-grid.html',
  styleUrl: './charts-grid.less',
})
export class ChartsGridComponent {
  readonly charts: IChartCard[] = [
    {
      color: 'red',
      chartConfig: {
        type: 'bar',
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        data: [50, 20, 5, 22, 55, 10, 35],
      },
      title: 'Website Views',
      subtitle: 'Last Campaign Performance',
      meta: 'campaign sent 2 days ago',
    },
    {
      color: 'green',
      chartConfig: {
        type: 'line',
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [30, 90, 280, 300, 490, 300, 190, 200, 480],
      },
      title: 'Daily Sales',
      subtitleHighlight: '(+15%)',
      subtitle: 'increase in today sales.',
      meta: 'updated 4 min ago',
    },
    {
      color: 'black',
      chartConfig: {
        type: 'line',
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [30, 90, 280, 300, 490, 300, 190, 200, 480],
      },
      title: 'Completed Tasks',
      subtitle: 'Last Campaign Performance',
      meta: 'just updated',
    },
  ];
}
