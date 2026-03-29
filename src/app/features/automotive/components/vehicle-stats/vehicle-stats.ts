import { Component, inject } from '@angular/core';

import { AutomotiveDataService } from '../../services';
import { VehicleStatCardComponent } from '../vehicle-stat-card/vehicle-stat-card';
import { AutoWeatherCardComponent } from '../weather-card/weather-card';

@Component({
  selector: 'app-vehicle-stats',
  imports: [AutoWeatherCardComponent, VehicleStatCardComponent],
  templateUrl: './vehicle-stats.html',
  styleUrl: './vehicle-stats.less',
})
export class VehicleStatsComponent {
  private readonly automotiveDataService: AutomotiveDataService = inject(AutomotiveDataService);

  readonly weather = this.automotiveDataService.weather;
  readonly stats = this.automotiveDataService.stats;
}
