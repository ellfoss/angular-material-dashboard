import { Component } from '@angular/core';

import { ConversationsComponent } from './components/conversations/conversations';
import { PlatformSettingsComponent } from './components/platform-settings/platform-settings';
import { ProfileInfoComponent } from './components/profile-info/profile-info';
import { ProjectsComponent } from './components/projects/projects';

@Component({
  selector: 'app-profile',
  imports: [
    ConversationsComponent,
    PlatformSettingsComponent,
    ProfileInfoComponent,
    ProjectsComponent,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.less',
})
export class ProfileComponent {}
