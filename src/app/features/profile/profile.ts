import { Component } from '@angular/core';

import { ITab, TabsComponent } from '../../shared';
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
    TabsComponent,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.less',
})
export class ProfileComponent {
  readonly profileTabs: ITab[] = [
    { id: 'app', label: 'App', icon: 'home' },
    { id: 'messages', label: 'Messages', icon: 'chat_bubble_outline' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];
}
