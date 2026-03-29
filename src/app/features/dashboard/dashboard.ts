import { Component, inject } from '@angular/core';

import { ChartsGridComponent } from './components/charts-grid/charts-grid';
import { ProductsTableComponent } from './components/products-table/products-table';
import { StatGridComponent } from './components/stat-grid/stat-grid';
import { DashboardDataService } from './services';

@Component({
  selector: 'app-dashboard',
  imports: [ChartsGridComponent, ProductsTableComponent, StatGridComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.less',
})
export class DashboardComponent {
  private readonly dashboardData: DashboardDataService = inject(DashboardDataService);
  readonly products = this.dashboardData.products;
}
