import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarService } from '../../../core/services';
import { FooterComponent } from '../footer/footer';
import { NavbarComponent } from '../navbar/navbar';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-shell',
  imports: [FooterComponent, NavbarComponent, RouterOutlet, SidebarComponent],
  templateUrl: './shell.html',
  styleUrl: './shell.less',
})
export class ShellComponent {
  private readonly sidebarService: SidebarService = inject(SidebarService);

  readonly sidebarHidden = this.sidebarService.hidden;
}
