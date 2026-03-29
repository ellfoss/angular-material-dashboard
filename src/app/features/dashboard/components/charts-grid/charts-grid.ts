import { Component, inject } from '@angular/core';

import { ChartCardComponent } from '../chart-card/chart-card';
import { DashboardDataService } from '../../services';

@Component({
  selector: 'app-charts-grid',
  imports: [ChartCardComponent],
  templateUrl: './charts-grid.html',
  styleUrl: './charts-grid.less',
})
export class ChartsGridComponent {
  private readonly dashboardData: DashboardDataService = inject(DashboardDataService);
  readonly charts = this.dashboardData.charts;
}
