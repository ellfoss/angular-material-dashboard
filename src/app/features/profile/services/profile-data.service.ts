import { Injectable } from '@angular/core';

import { IConversation, IPlatformSetting, IProfileInfoRow, IProject } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class ProfileDataService {
  readonly projects: IProject[] = [
    {
      number: 1,
      name: 'Modern',
      description: 'As Uber works through a huge amount of business model evolution...',
      image: 'assets/images/modern.png',
      participants: [
        'assets/images/participant-1.png',
        'assets/images/participant-2.png',
        'assets/images/participant-3.png',
        'assets/images/participant-4.png',
      ],
    },
    {
      number: 2,
      name: 'Scandinavian',
      description: 'Music is something that every person has for her own specific opinion about.',
      image: 'assets/images/scandinavian.png',
      participants: [
        'assets/images/participant-1.png',
        'assets/images/participant-2.png',
        'assets/images/participant-3.png',
        'assets/images/participant-4.png',
      ],
    },
    {
      number: 3,
      name: 'Minimalist',
      description: 'Different people have different tastes, and various types of music.',
      image: 'assets/images/minimalist.png',
      participants: [
        'assets/images/participant-1.png',
        'assets/images/participant-2.png',
        'assets/images/participant-3.png',
        'assets/images/participant-4.png',
      ],
    },
    {
      number: 4,
      name: 'Gothic',
      description: 'Why would anyone pick blue over pink? Pink is obviously a better color.',
      image: 'assets/images/gothic.png',
      participants: [
        'assets/images/participant-2.png',
        'assets/images/participant-3.png',
        'assets/images/participant-4.png',
      ],
    },
  ];

  readonly conversations: IConversation[] = [
    { name: 'Sophie B.', message: 'Hi! I need more information...', avatar: 'assets/images/conversation-avatar-1.png' },
    { name: 'Anne Marie', message: 'Awesome work, can we...', avatar: 'assets/images/conversation-avatar-2.png' },
    { name: 'Ivanna', message: 'About files I can...', avatar: 'assets/images/conversation-avatar-3.png' },
    { name: 'Peterson', message: 'Have a great afternoon...', avatar: 'assets/images/conversation-avatar-4.png' },
    { name: 'Nick Daniel', message: 'Hi! I need some more...', avatar: 'assets/images/conversation-avatar-5.png' },
  ];

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

  readonly infoRows: IProfileInfoRow[] = [
    { label: 'Full Name:', value: 'Alec M. Thompson' },
    { label: 'Mobile:', value: '(44) 123 1234 123' },
    { label: 'Email:', value: 'alecthompson@mail.com' },
    { label: 'Location:', value: 'USA' },
  ];
}
