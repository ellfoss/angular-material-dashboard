import { Component, inject } from '@angular/core';

import { ToggleComponent } from '../../../../shared';
import { ProfileDataService } from '../../services';

@Component({
  selector: 'app-platform-settings',
  imports: [ToggleComponent],
  templateUrl: './platform-settings.html',
  styleUrl: './platform-settings.less',
})
export class PlatformSettingsComponent {
  private readonly profileData: ProfileDataService = inject(ProfileDataService);
  readonly accountSettings = this.profileData.accountSettings;
  readonly applicationSettings = this.profileData.applicationSettings;
}
