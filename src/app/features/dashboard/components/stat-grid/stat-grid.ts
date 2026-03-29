import { Component, inject } from '@angular/core';

import { StatCardComponent } from '../stat-card/stat-card';
import { DashboardDataService } from '../../services';

@Component({
  selector: 'app-stat-grid',
  imports: [StatCardComponent],
  templateUrl: './stat-grid.html',
  styleUrl: './stat-grid.less',
})
export class StatGridComponent {
  private readonly dashboardData: DashboardDataService = inject(DashboardDataService);
  readonly stats = this.dashboardData.stats;
}
