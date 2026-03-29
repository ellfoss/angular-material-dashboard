import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { AutomotiveDataService } from '../../services';

@Component({
  selector: 'app-gps-panel',
  templateUrl: './gps-panel.html',
  styleUrl: './gps-panel.less',
})
export class GpsPanelComponent {
  private readonly automotiveDataService: AutomotiveDataService = inject(AutomotiveDataService);
  private readonly sanitizer: DomSanitizer = inject(DomSanitizer);

  readonly gpsStats = this.automotiveDataService.gpsStats;
  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.openstreetmap.org/export/embed.html?bbox=-77.5,38.7,-76.9,39.1&layer=mapnik'
  );
}
