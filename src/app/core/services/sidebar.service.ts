import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  readonly hidden = signal<boolean>(false);

  toggle(): void {
    this.hidden.update((v: boolean) => !v);
  }
}
