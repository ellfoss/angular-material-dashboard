import { Component, input } from '@angular/core';

import { IWeather } from '../../interfaces';

@Component({
  selector: 'app-auto-weather-card',
  templateUrl: './weather-card.html',
  styleUrl: './weather-card.less',
})
export class AutoWeatherCardComponent {
  readonly weather = input.required<IWeather>();
}
