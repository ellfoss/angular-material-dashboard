import { Component, inject } from '@angular/core';

import { SmartHomeDataService } from '../../services';

@Component({
  selector: 'app-device-limit',
  templateUrl: './device-limit.html',
  styleUrl: './device-limit.less',
})
export class DeviceLimitComponent {
  private readonly dataService: SmartHomeDataService = inject(SmartHomeDataService);
  readonly limit = this.dataService.deviceLimit;

  private get pct(): number {
    const { value, min, max } = this.limit;
    return (value - min) / (max - min);
  }

  private get angle(): number {
    return Math.PI * (1 - this.pct);
  }

  get progressEndX(): string {
    return (100 + 80 * Math.cos(this.angle)).toFixed(2);
  }

  get progressEndY(): string {
    return (90 + 80 * Math.sin(this.angle)).toFixed(2);
  }

  get largeArcFlag(): number {
    return this.pct > 0.5 ? 1 : 0;
  }

  get progressArcD(): string {
    return `M 20 90 A 80 80 0 ${this.largeArcFlag} 0 ${this.progressEndX} ${this.progressEndY}`;
  }
}
