import { Component, inject } from '@angular/core';

import { ProfileDataService } from '../../services';

@Component({
  selector: 'app-conversations',
  imports: [],
  templateUrl: './conversations.html',
  styleUrl: './conversations.less',
})
export class ConversationsComponent {
  private readonly profileData: ProfileDataService = inject(ProfileDataService);
  readonly conversations = this.profileData.conversations;
}
