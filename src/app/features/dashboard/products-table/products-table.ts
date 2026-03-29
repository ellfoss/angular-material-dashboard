import { Component, input } from '@angular/core';

import { IProduct } from '../interfaces';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.html',
  styleUrl: './products-table.less',
})
export class ProductsTableComponent {
  readonly products = input.required<IProduct[]>();
}
