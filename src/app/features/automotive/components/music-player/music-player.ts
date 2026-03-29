import { Component, inject, signal, WritableSignal } from '@angular/core';

import { AutomotiveDataService } from '../../services';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.html',
  styleUrl: './music-player.less',
})
export class MusicPlayerComponent {
  private readonly automotiveDataService: AutomotiveDataService = inject(AutomotiveDataService);

  readonly track = this.automotiveDataService.track;
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
