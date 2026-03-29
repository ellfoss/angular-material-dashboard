import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

import { SidebarService } from '../../../core/services';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.less',
})
export class NavbarComponent implements OnInit {
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly destroyRef: DestroyRef = inject(DestroyRef);
  private readonly router: Router = inject(Router);
  private readonly sidebarService: SidebarService = inject(SidebarService);

  readonly pageTitle = signal<string>('');
  readonly breadcrumb = signal<string[]>([]);

  ngOnInit(): void {
    this.updateFromRoute();

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      takeUntilDestroyed(this.destroyRef),
    ).subscribe(() => this.updateFromRoute());
  }

  toggleSidebar(): void {
    this.sidebarService.toggle();
  }

  private updateFromRoute(): void {
    let route: ActivatedRoute = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const data = route.snapshot.data;
    this.pageTitle.set(data['title'] ?? '');
    this.breadcrumb.set(data['breadcrumb'] ?? []);
  }
}
