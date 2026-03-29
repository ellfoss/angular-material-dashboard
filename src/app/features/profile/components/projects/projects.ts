import { Component, inject } from '@angular/core';

import { ProjectCardComponent } from '../project-card/project-card';
import { ProfileDataService } from '../../services';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.less',
})
export class ProjectsComponent {
  private readonly profileData: ProfileDataService = inject(ProfileDataService);
  readonly projects = this.profileData.projects;
}
