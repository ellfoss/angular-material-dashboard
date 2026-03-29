import { Injectable, signal } from '@angular/core';

import { IConsumptionItem, IDevice, IHomeStatItem } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class SmartHomeDataService {
  readonly stats: IHomeStatItem[] = [
    { value: '21', unit: '°C', label: 'Temperature', sublabel: 'Living Room', color: 'red' },
    { value: '44', unit: '%', label: 'Humidity', sublabel: 'Outside', color: 'red' },
    { value: '87', unit: 'm³', label: 'Water', sublabel: 'Consumption', color: 'blue' },
    { value: '417', unit: 'kW', label: 'Internet', sublabel: 'All devices', color: 'blue' },
  ];

  readonly weather = {
    city: 'San Francisco',
    temperature: 29,
    condition: 'Sunny',
  };

  readonly barChartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    data: [20, 35, 25, 30, 50, 35, 45],
  };

  readonly deviceLimit = {
    value: 21,
    min: 14,
    max: 30,
    temperature: 31.5,
    humidity: 27,
  };

  readonly consumptionTotal = 471.3;

  readonly consumptionItems: IConsumptionItem[] = [
    { label: 'Living Room', color: '#e91f63', watts: 165, percentage: 35 },
    { label: 'Kitchen', color: '#344767', watts: 94, percentage: 20 },
    { label: 'Attic', color: '#17c1e8', watts: 71, percentage: 15 },
    { label: 'Garage', color: '#82d616', watts: 80, percentage: 17 },
    { label: 'Basement', color: '#fb8c00', watts: 61, percentage: 13 },
  ];

  readonly devices = signal<IDevice[]>([
    { id: 1, name: 'Humidity', icon: 'water_drop', active: false, status: 'Inactive since: 3 days' },
    { id: 2, name: 'Humidity', icon: 'water_drop', active: true, status: 'Inactive since: 3 days' },
    { id: 3, name: 'Humidity', icon: 'water_drop', active: false, status: 'Inactive since: 3 days' },
    { id: 4, name: 'Humidity', icon: 'water_drop', active: false, status: 'Inactive since: 3 days' },
    { id: 5, name: 'Humidity', icon: 'wifi', active: true, status: 'Inactive since: 3 days' },
  ]);

  toggleDevice(id: number): void {
    this.devices.update(devices =>
      devices.map(d => d.id === id ? { ...d, active: !d.active } : d),
    );
  }
}
