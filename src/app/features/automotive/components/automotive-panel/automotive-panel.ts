import { Component, inject, signal, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IGpsStat, ITrack } from '../../interfaces';
import { AutomotiveDataService } from '../../services';

@Component({
  selector: 'app-automotive-panel',
  templateUrl: './automotive-panel.html',
  styleUrl: './automotive-panel.less',
})
export class AutomotivePanelComponent {
  private readonly automotiveDataService: AutomotiveDataService = inject(AutomotiveDataService);
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);

  readonly gpsStats: IGpsStat[] = this.automotiveDataService.gpsStats;
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.openstreetmap.org/export/embed.html?bbox=-77.0605,38.8603,-76.9855,38.9103&layer=mapnik'
  );
  readonly track: ITrack = this.automotiveDataService.track;
  readonly playing: WritableSignal<boolean> = signal(false);
  readonly volume: WritableSignal<number> = signal(30);

  togglePlay(): void {
    this.playing.update((v: boolean) => !v);
  }

  onVolumeChange(event: Event): void {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.volume.set(Number(input.value));
  }
}
