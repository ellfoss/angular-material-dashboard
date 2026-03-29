import { Component, input } from '@angular/core';

import { IBillingContact } from '../../interfaces';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.html',
  styleUrl: './billing-info.less',
})
export class BillingInfoComponent {
  readonly contacts = input.required<IBillingContact[]>();
}
