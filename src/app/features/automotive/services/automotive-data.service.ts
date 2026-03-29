import { Injectable } from '@angular/core';

import { IAutomotiveStat, IChargeInfo, IGpsStat, ITrack, IWeather } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class AutomotiveDataService {
  readonly chargeInfo: IChargeInfo = {
    sinceLastCharge: { distance: '145 Km', energy: '300 Kw' },
    nearestCharger: { location: 'Milan, DW', address: '891 Limarenda road' },
  };

  readonly weather: IWeather = {
    city: 'San Francisco',
    temperature: 29,
    condition: 'Cloudy',
  };

  readonly stats: IAutomotiveStat[] = [
    { icon: 'directions_car', label: "Today's Trip", value: '145' },
    { icon: 'battery_full', label: 'Battery Health', value: '99 %' },
    { icon: 'speed', label: 'Average Speed', value: '56 Km/h' },
    { icon: 'volume_up', label: 'Music Volume', value: '15/100' },
  ];

  readonly gpsStats: IGpsStat[] = [
    { value: '11:13', label: 'Estimated arrival time' },
    { value: '2.4', unit: 'Km', label: 'Turn right in 2.4 miles.' },
    { value: '6.3', unit: 'Km', label: 'Distance to Creative Tim' },
  ];

  readonly track: ITrack = {
    title: 'Scorpion (feat Quavo)',
    artist: 'Drake',
    subtitle: 'Rockstar',
  };
}
