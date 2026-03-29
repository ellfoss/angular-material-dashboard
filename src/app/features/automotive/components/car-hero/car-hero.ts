import { Component, inject } from '@angular/core';

import { ILocationBlock, IMetricsBlock } from '../../interfaces';
import { AutomotiveDataService } from '../../services';

@Component({
  selector: 'app-car-hero',
  templateUrl: './car-hero.html',
  styleUrl: './car-hero.less',
})
export class CarHeroComponent {
  private readonly automotiveDataService: AutomotiveDataService = inject(AutomotiveDataService);

  readonly sinceLastCharge: IMetricsBlock = this.automotiveDataService.chargeInfo.sinceLastCharge;
  readonly nearestCharger: ILocationBlock = this.automotiveDataService.chargeInfo.nearestCharger;
}
