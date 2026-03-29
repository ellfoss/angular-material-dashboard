import { Component, input } from '@angular/core';

import { IProduct } from '../../interfaces';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.html',
  styleUrl: './products-table.less',
  imports: [
    DecimalPipe,
  ],
})
export class ProductsTableComponent {
  readonly products = input.required<IProduct[]>();
}
