import { Component, inject } from '@angular/core';

import { SmartHomeDataService } from '../../services';
import { HomeStatCardComponent } from '../home-stat-card/home-stat-card';

@Component({
  selector: 'app-home-stat-grid',
  imports: [HomeStatCardComponent],
  templateUrl: './home-stat-grid.html',
  styleUrl: './home-stat-grid.less',
})
export class HomeStatGridComponent {
  private readonly dataService: SmartHomeDataService = inject(SmartHomeDataService);
  readonly stats = this.dataService.stats;
}
