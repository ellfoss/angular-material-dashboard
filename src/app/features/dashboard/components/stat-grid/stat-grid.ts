import { Component } from '@angular/core';

import { IStatCard } from '../interfaces';
import { IStatCardComponent } from '../stat-card/stat-card';

@Component({
  selector: 'app-stat-grid',
  imports: [IStatCardComponent],
  templateUrl: './stat-grid.html',
  styleUrl: './stat-grid.less',
})
export class StatGridComponent {
  readonly stats: IStatCard[] = [
    {
      gradient: 'var(--gradient-black)',
      icon: 'account_circle',
      label: 'Bookings',
      value: '281',
      change: '+55%',
      changePositive: true,
      period: 'than last week',
    },
    {
      gradient: 'var(--gradient-red)',
      icon: 'leaderboard',
      label: "Today's Users",
      value: '2,300',
      change: '+3%',
      changePositive: true,
      period: 'than last week',
    },
    {
      gradient: 'var(--gradient-green)',
      icon: 'store',
      label: 'Revenue',
      value: '34k',
      change: '+1%',
      changePositive: true,
      period: 'than yesterday',
    },
    {
      gradient: 'var(--gradient-blue)',
      icon: 'person_add',
      label: 'Followers',
      value: '+91',
      change: '',
      changePositive: true,
      period: 'Just updated',
    },
  ];
}
