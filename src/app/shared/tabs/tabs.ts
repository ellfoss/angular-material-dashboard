import { Component, OnInit, input, output, signal } from '@angular/core';

import { ITab, ITabChange } from './interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.html',
  styleUrl: './tabs.less',
})
export class TabsComponent implements OnInit {
  readonly tabs = input.required<ITab[]>();
  readonly tabChange = output<ITabChange>();
  readonly activeId = signal<string>('');

  ngOnInit(): void {
    const first = this.tabs()[0];
    if (first) {
      this.activeId.set(first.id);
    }
  }

  select(tab: ITab, index: number): void {
    this.activeId.set(tab.id);
    this.tabChange.emit({ id: tab.id, index });
  }
}
