import { Component, inject } from '@angular/core';

import { AutomotiveDataService } from '../../services';

@Component({
  selector: 'app-car-hero',
  templateUrl: './car-hero.html',
  styleUrl: './car-hero.less',
})
export class CarHeroComponent {
  private readonly automotiveDataService: AutomotiveDataService = inject(AutomotiveDataService);

  readonly chargeInfo = this.automotiveDataService.chargeInfo;
}
