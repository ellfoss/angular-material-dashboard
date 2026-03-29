import { Component, input } from '@angular/core';

import { IHomeStatItem } from '../../interfaces';

@Component({
  selector: 'app-home-stat-card',
  templateUrl: './home-stat-card.html',
  styleUrl: './home-stat-card.less',
})
export class HomeStatCardComponent {
  readonly item = input.required<IHomeStatItem>();
}
