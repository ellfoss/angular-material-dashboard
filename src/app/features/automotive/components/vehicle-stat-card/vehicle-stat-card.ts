import { Component, input } from '@angular/core';

import { IAutomotiveStat } from '../../interfaces';

@Component({
  selector: 'app-vehicle-stat-card',
  templateUrl: './vehicle-stat-card.html',
  styleUrl: './vehicle-stat-card.less',
})
export class VehicleStatCardComponent {
  readonly stat = input.required<IAutomotiveStat>();
}
