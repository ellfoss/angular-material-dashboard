import { Component, inject } from '@angular/core';

import { SmartHomeDataService } from '../../services';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.less',
})
export class WeatherCardComponent {
  private readonly dataService: SmartHomeDataService = inject(SmartHomeDataService);
  readonly weather = this.dataService.weather;
}
