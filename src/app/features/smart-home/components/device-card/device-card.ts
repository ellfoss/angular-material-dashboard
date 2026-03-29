import { Component, input, output } from '@angular/core';

import { ToggleComponent } from '../../../../shared';
import { IDevice } from '../../interfaces';

@Component({
  selector: 'app-device-card',
  imports: [ToggleComponent],
  templateUrl: './device-card.html',
  styleUrl: './device-card.less',
  host: { '[class.active]': 'device().active' },
})
export class DeviceCardComponent {
  readonly device = input.required<IDevice>();
  readonly toggle = output<void>();
}
