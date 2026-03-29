import { Component } from '@angular/core';

import { CameraCardComponent } from './components/camera-card/camera-card';
import { ConsumptionChartComponent } from './components/consumption-chart/consumption-chart';
import { DeviceLimitComponent } from './components/device-limit/device-limit';
import { DevicesGridComponent } from './components/devices-grid/devices-grid';
import { HomeBarChartComponent } from './components/home-bar-chart/home-bar-chart';
import { HomeStatGridComponent } from './components/home-stat-grid/home-stat-grid';
import { WeatherCardComponent } from './components/weather-card/weather-card';

@Component({
  selector: 'app-smart-home',
  imports: [
    CameraCardComponent,
    ConsumptionChartComponent,
    DeviceLimitComponent,
    DevicesGridComponent,
    HomeBarChartComponent,
    HomeStatGridComponent,
    WeatherCardComponent,
  ],
  templateUrl: './smart-home.html',
  styleUrl: './smart-home.less',
})
export class SmartHomeComponent {}
