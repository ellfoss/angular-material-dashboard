import { Injectable, signal } from '@angular/core';

import { IConsumptionItem, IDevice, IHomeStatItem } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class SmartHomeDataService {
  readonly stats: IHomeStatItem[] = [
    { value: '21', unit: '°C', label: 'Living Room', sublabel: 'Temperature' },
    { value: '44', unit: '%', label: 'Outside', sublabel: 'Humidity' },
    { value: '87', unit: 'm³', label: 'Water', sublabel: 'Consumption' },
    { value: '417', unit: 'kW', label: 'Internet', sublabel: 'All devices' },
  ];

  readonly weather = {
    city: 'San Francisco',
    temperature: 29,
    condition: 'Sunny',
  };

  readonly barChartData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    data: [26, 29, 28, 32, 29, 28, 30],
  };

  readonly deviceLimit = {
    value: 21,
    min: 16,
    max: 38,
    temperature: 21,
    humidity: 57,
  };

  readonly consumptionTotal = 471.3;

  readonly consumptionItems: IConsumptionItem[] = [
    { label: 'Living Room', color: 'var(--color-red)', percentage: 15 },
    { label: 'Kitchen', color: 'var(--color-dark-blue)', percentage: 20 },
    { label: 'Attic', color: 'var(--color-blue)', percentage: 13 },
    { label: 'Garage', color: 'var(--color-green)', percentage: 32 },
    { label: 'Basement', color: 'var(--color-orange)', percentage: 20 },
  ];

  readonly devices = signal<IDevice[]>([
    { id: 1, name: 'Humidity', image: '/assets/images/device-humidity.png', active: false, status: 'Inactive since: 3 days' },
    { id: 2, name: 'Temperature', image: '/assets/images/device-temperature.png', active: true, status: 'Inactive since: 3 days' },
    { id: 3, name: 'Air Condition', image: '/assets/images/device-air-condition.png', active: false, status: 'Inactive since: 3 days' },
    { id: 4, name: 'Sensor', image: '/assets/images/device-sensor.png', active: false, status: 'Inactive since: 3 days' },
    { id: 5, name: 'Wi-Fi', image: '/assets/images/device-wifi.png', active: true, status: 'Inactive since: 3 days' },
  ]);

  toggleDevice(id: number): void {
    this.devices.update(devices =>
      devices.map(d => d.id === id ? { ...d, active: !d.active } : d),
    );
  }
}
