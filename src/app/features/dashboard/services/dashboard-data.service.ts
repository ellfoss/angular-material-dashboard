import { Injectable } from '@angular/core';

import { IChartCard, IProduct, IStatCard } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class DashboardDataService {
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

  readonly charts: IChartCard[] = [
    {
      color: 'red',
      chartConfig: {
        type: 'bar',
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        data: [50, 20, 5, 22, 55, 10, 35],
      },
      title: 'Website Views',
      subtitle: 'Last Campaign Performance',
      meta: 'campaign sent 2 days ago',
    },
    {
      color: 'green',
      chartConfig: {
        type: 'line',
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [30, 90, 280, 300, 490, 300, 190, 200, 480],
      },
      title: 'Daily Sales',
      subtitleHighlight: '(+15%)',
      subtitle: 'increase in today sales.',
      meta: 'updated 4 min ago',
    },
    {
      color: 'black',
      chartConfig: {
        type: 'line',
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [30, 90, 280, 300, 490, 300, 190, 200, 480],
      },
      title: 'Completed Tasks',
      subtitle: 'Last Campaign Performance',
      meta: 'just updated',
    },
  ];

  readonly products: IProduct[] = [
    { avatar: 'assets/images/avatar-1.png', name: 'Nike v22 Running', orders: 8232, value: '$130,992', adsSpent: '$9,500', refunds: 13, refundUp: false },
    { avatar: 'assets/images/avatar-2.png', name: 'Business Kit (Mug + Notebook)', orders: 12821, value: '$80,250', adsSpent: '$4,200', refunds: 40, refundUp: false },
    { avatar: 'assets/images/avatar-3.png', name: 'Black Chair', orders: 2421, value: '$40,600', adsSpent: '$9,430', refunds: 54, refundUp: true },
    { avatar: 'assets/images/avatar-4.png', name: 'Wireless Charger', orders: 5921, value: '$91,300', adsSpent: '$7,364', refunds: 5, refundUp: false },
    { avatar: 'assets/images/avatar-5.png', name: 'Mountain Trip Kit (Camera + Backpack)', orders: 921, value: '$140,925', adsSpent: '$20,531', refunds: 121, refundUp: true },
  ];
}
