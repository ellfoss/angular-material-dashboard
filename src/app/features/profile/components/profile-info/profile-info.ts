import { Component, inject } from '@angular/core';

import { ProfileDataService } from '../../services';

@Component({
  selector: 'app-profile-info',
  imports: [],
  templateUrl: './profile-info.html',
  styleUrl: './profile-info.less',
})
export class ProfileInfoComponent {
  private readonly profileData: ProfileDataService = inject(ProfileDataService);
  readonly infoRows = this.profileData.infoRows;
}
