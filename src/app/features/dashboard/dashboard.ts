import { Component } from '@angular/core';

import { ChartsGridComponent } from './charts-grid/charts-grid';
import { IProject } from './interfaces';
import { IProjectsTableComponent } from './projects-table/projects-table';
import { StatGridComponent } from './stat-grid/stat-grid';

@Component({
  selector: 'app-dashboard',
  imports: [ChartsGridComponent, IProjectsTableComponent, StatGridComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.less',
})
export class DashboardComponent {
  readonly projects: IProject[] = [
    { name: 'Material UI XD Version', members: 4, budget: '$14,000', completion: 60 },
    { name: 'Add Progress Track', members: 5, budget: '$3,000', completion: 10 },
    { name: 'Fix Platform Errors', members: 2, budget: 'Not set', completion: 100 },
    { name: 'Launch our Mobile App', members: 4, budget: '$32,000', completion: 100 },
    { name: 'Add the New Pricing Page', members: 6, budget: '$400', completion: 25 },
    { name: 'Redesign New Online Shop', members: 4, budget: '$7,600', completion: 40 },
  ];
}
