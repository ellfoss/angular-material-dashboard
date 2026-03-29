import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from '../navbar/navbar';
import { SidebarService } from '../../../core/services';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './shell.html',
  styleUrl: './shell.less',
})
export class ShellComponent {
  private readonly sidebarService: SidebarService = inject(SidebarService);

  readonly sidebarHidden = this.sidebarService.hidden;
}
