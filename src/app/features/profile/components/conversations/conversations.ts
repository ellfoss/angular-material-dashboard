import { Component } from '@angular/core';

import { IConversation } from '../../interfaces';

@Component({
  selector: 'app-conversations',
  imports: [],
  templateUrl: './conversations.html',
  styleUrl: './conversations.less',
})
export class ConversationsComponent {
  readonly conversations: IConversation[] = [
    { name: 'Sophie B.', message: 'Hi! I need more information...', avatar: 'assets/images/avatar-1.png', replyColor: 'black' },
    { name: 'Anne Marie', message: 'Awesome work, can we...', avatar: 'assets/images/avatar-2.png', replyColor: 'black' },
    { name: 'Ivanna', message: 'About files I can...', avatar: 'assets/images/avatar-3.png', replyColor: 'red' },
    { name: 'Peterson', message: 'Have a great afternoon...', avatar: 'assets/images/avatar-4.png', replyColor: 'black' },
    { name: 'Nick Daniel', message: 'Hi! I need some more...', avatar: 'assets/images/avatar-5.png', replyColor: 'black' },
  ];
}
