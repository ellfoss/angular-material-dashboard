import { Component } from '@angular/core';

import { CarHeroComponent } from './components/car-hero/car-hero';
import { GpsPanelComponent } from './components/gps-panel/gps-panel';
import { MusicPlayerComponent } from './components/music-player/music-player';
import { VehicleStatsComponent } from './components/vehicle-stats/vehicle-stats';

@Component({
  selector: 'app-automotive',
  imports: [CarHeroComponent, GpsPanelComponent, MusicPlayerComponent, VehicleStatsComponent],
  templateUrl: './automotive.html',
  styleUrl: './automotive.less',
})
export class AutomotiveComponent {}
