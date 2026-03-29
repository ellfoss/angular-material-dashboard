import { Component } from '@angular/core';

import { AutomotivePanelComponent } from './components/automotive-panel/automotive-panel';
import { CarHeroComponent } from './components/car-hero/car-hero';
import { VehicleStatsComponent } from './components/vehicle-stats/vehicle-stats';

@Component({
  selector: 'app-automotive',
  imports: [CarHeroComponent, VehicleStatsComponent, AutomotivePanelComponent],
  templateUrl: './automotive.html',
  styleUrl: './automotive.less',
})
export class AutomotiveComponent {}
