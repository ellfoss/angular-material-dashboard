import { Component, input } from '@angular/core';

import { IInvoice } from '../../interfaces';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.html',
  styleUrl: './invoices.less',
})
export class InvoicesComponent {
  readonly invoices = input.required<IInvoice[]>();
}
