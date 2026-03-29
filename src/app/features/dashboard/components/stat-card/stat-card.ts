import { Component, input } from '@angular/core';

import { IStatCard } from '../../interfaces';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.less',
})
export class StatCardComponent {
  readonly stat = input.required<IStatCard>();
}
