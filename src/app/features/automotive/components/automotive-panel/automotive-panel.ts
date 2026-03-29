import { Component } from '@angular/core';

import { GpsPanelComponent } from '../gps-panel/gps-panel';
import { MusicPlayerComponent } from '../music-player/music-player';

@Component({
  selector: 'app-automotive-panel',
  imports: [GpsPanelComponent, MusicPlayerComponent],
  templateUrl: './automotive-panel.html',
  styleUrl: './automotive-panel.less',
})
export class AutomotivePanelComponent {}
