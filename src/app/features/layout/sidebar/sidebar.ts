import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { INavItem, INavSection } from './interfaces';
import { SidebarService } from '../../../core/services';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.less',
  host: { '[class.hidden]': 'hidden()' },
})
export class SidebarComponent {
  private readonly router: Router = inject(Router);
  private readonly sidebarService: SidebarService = inject(SidebarService);

  readonly hidden = this.sidebarService.hidden;

  readonly sections: INavSection[] = [
    {
      items: [
        {
          label: 'Dashboards',
          icon: 'dashboard',
          expanded: true,
          children: [
            { label: 'Analytics', letter: 'A', route: '/dashboard' },
            { label: 'Smart Home', letter: 'S', route: '/smart-home' },
          ],
        },
      ],
    },
    {
      title: 'PAGES',
      items: [
        {
          label: 'Pages',
          icon: 'image',
          expanded: false,
          children: [
            { label: 'Automotive', letter: 'A', route: '/automotive' },
            { label: 'Notifications', letter: 'N', route: '/notifications' },
            { label: 'Profile', letter: 'P', route: '/profile' },
          ],
        },
        { label: 'Applications', icon: 'apps', expanded: false, children: [] },
        { label: 'Ecommerce', icon: 'shopping_bag', expanded: false, children: [] },
        {
          label: 'Account',
          icon: 'person',
          expanded: false,
          children: [
            { label: 'Settings', letter: 'S', route: '/settings' },
            { label: 'Billing', letter: 'B', route: '/billing' },
          ],
        },
        {
          label: 'Authentication',
          icon: 'person',
          expanded: false,
          children: [
            { label: 'Sign In', letter: 'S', route: '/sign-in' },
            { label: 'Sign Up', letter: 'U', route: '/sign-up' },
          ],
        },
        {
          label: 'Error',
          letter: 'E',
          expanded: false,
          children: [
            { label: 'Error 404', letter: 'B', route: '/error-404' },
            { label: 'Error 500', letter: 'C', route: '/error-500' },
          ],
        },
      ],
    },
    {
      title: 'DOCS',
      hasDivider: true,
      items: [
        { label: 'Basic', icon: 'receipt_long', expanded: false, children: [] },
        { label: 'Components', icon: 'settings', expanded: false, children: [] },
        { label: 'Changelog', icon: 'history_edu', route: '/changelog' },
      ],
    },
  ];

  toggle(item: INavItem): void {
    item.expanded = !item.expanded;
  }

  isGroupActive(item: INavItem): boolean {
    const options = {
      paths: 'exact' as const,
      queryParams: 'ignored' as const,
      fragment: 'ignored' as const,
      matrixParams: 'ignored' as const,
    };
    return item.children?.some(child =>
      child.route ? this.router.isActive(child.route, options) : false
    ) ?? false;
  }

  isChildActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }
}
