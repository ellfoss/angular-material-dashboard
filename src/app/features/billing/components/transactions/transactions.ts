import { Component, input } from '@angular/core';

import { ITransactionGroup } from '../../interfaces';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.html',
  styleUrl: './transactions.less',
})
export class TransactionsComponent {
  readonly groups = input.required<ITransactionGroup[]>();
}
