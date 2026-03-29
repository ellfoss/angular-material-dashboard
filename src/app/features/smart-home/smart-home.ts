import { Component } from '@angular/core';

import { CameraCardComponent } from './components/camera-card/camera-card';
import { ConsumptionChartComponent } from './components/consumption-chart/consumption-chart';
import { DeviceLimitComponent } from './components/device-limit/device-limit';
import { DevicesGridComponent } from './components/devices-grid/devices-grid';
import { HomeStatGridComponent } from './components/home-stat-grid/home-stat-grid';
import { WeatherChartCardComponent } from './components/weather-chart-card/weather-chart-card';

@Component({
  selector: 'app-smart-home',
  imports: [
    CameraCardComponent,
    ConsumptionChartComponent,
    DeviceLimitComponent,
    DevicesGridComponent,
    HomeStatGridComponent,
    WeatherChartCardComponent,
  ],
  templateUrl: './smart-home.html',
  styleUrl: './smart-home.less',
})
export class SmartHomeComponent {}
