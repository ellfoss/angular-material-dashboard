import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-camera-card',
  templateUrl: './camera-card.html',
  styleUrl: './camera-card.less',
})
export class CameraCardComponent {
  readonly tabs: string[] = ['Kitchen', 'Living', 'Attic'];
  readonly activeTab = signal<string>('Kitchen');
}
