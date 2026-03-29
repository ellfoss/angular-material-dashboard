import { Component, inject } from '@angular/core';

import { SmartHomeDataService } from '../../services';
import { DeviceCardComponent } from '../device-card/device-card';

@Component({
  selector: 'app-devices-grid',
  imports: [DeviceCardComponent],
  templateUrl: './devices-grid.html',
  styleUrl: './devices-grid.less',
})
export class DevicesGridComponent {
  private readonly dataService: SmartHomeDataService = inject(SmartHomeDataService);
  readonly devices = this.dataService.devices;

  onToggle(id: number): void {
    this.dataService.toggleDevice(id);
  }
}
