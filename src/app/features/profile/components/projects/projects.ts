import { Component } from '@angular/core';

import { IProject } from '../../interfaces';
import { ProjectCardComponent } from './components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.less',
})
export class ProjectsComponent {
  readonly projects: IProject[] = [
    {
      number: 1,
      name: 'Modern',
      description: 'As Uber works through a huge amount of business model evolution...',
      image: 'assets/images/modern.png',
      participants: [
        'assets/images/conversation-avatar-1.png',
        'assets/images/conversation-avatar-2.png',
        'assets/images/conversation-avatar-3.png',
      ],
    },
    {
      number: 2,
      name: 'Scandinavian',
      description: 'Music is something that every person has for her own specific opinion about.',
      image: 'assets/images/scandinavian.png',
      participants: [
        'assets/images/conversation-avatar-4.png',
        'assets/images/conversation-avatar-5.png',
      ],
    },
    {
      number: 3,
      name: 'Minimalist',
      description: 'Different people have different tastes, and various types of music.',
      image: 'assets/images/minimalist.png',
      participants: [
        'assets/images/conversation-avatar-1.png',
        'assets/images/conversation-avatar-3.png',
        'assets/images/conversation-avatar-5.png',
      ],
    },
    {
      number: 4,
      name: 'Gothic',
      description: 'Why would anyone pick blue over pink? Pink is obviously a better color.',
      image: 'assets/images/gothic.png',
      participants: [
        'assets/images/conversation-avatar-2.png',
        'assets/images/conversation-avatar-4.png',
      ],
    },
  ];
}
