import { Component, Input } from '@angular/core';

import { IStatCard } from '../interfaces';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.less',
})
export class IStatCardComponent {
  @Input({ required: true }) stat!: IStatCard;
}
