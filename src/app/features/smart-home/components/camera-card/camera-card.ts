import { Component } from '@angular/core';

import { ITab, TabsComponent } from '../../../../shared';

@Component({
  selector: 'app-camera-card',
  imports: [TabsComponent],
  templateUrl: './camera-card.html',
  styleUrl: './camera-card.less',
})
export class CameraCardComponent {
  readonly tabs: ITab[] = [
    { id: 'kitchen', label: 'Kitchen' },
    { id: 'living', label: 'Living' },
    { id: 'attic', label: 'Attic' },
  ];
}
