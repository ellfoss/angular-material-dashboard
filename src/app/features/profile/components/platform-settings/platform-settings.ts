import { Component } from '@angular/core';

import { IPlatformSetting } from '../../interfaces';

@Component({
  selector: 'app-platform-settings',
  imports: [],
  templateUrl: './platform-settings.html',
  styleUrl: './platform-settings.less',
})
export class PlatformSettingsComponent {
  readonly accountSettings: IPlatformSetting[] = [
    { label: 'Email me when someone follows me', enabled: true },
    { label: 'Email me when someone answers on my post', enabled: false },
    { label: 'Email me when someone mentions me', enabled: true },
  ];

  readonly applicationSettings: IPlatformSetting[] = [
    { label: 'New launches and projects', enabled: false },
    { label: 'Monthly product updates', enabled: true },
    { label: 'Subscribe to newsletter', enabled: false },
  ];
}
