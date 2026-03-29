import { Component, input } from '@angular/core';

import { IProject } from '../../interfaces';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.less',
})
export class ProjectCardComponent {
  readonly project = input.required<IProject>();
}
