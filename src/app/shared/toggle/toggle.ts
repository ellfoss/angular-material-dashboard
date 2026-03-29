import { Component, input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.less',
})
export class ToggleComponent {
  readonly checked = input<boolean>(false);
}
