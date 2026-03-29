import { Component, input } from '@angular/core';

import { IPaymentCard } from '../../interfaces';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.html',
  styleUrl: './payment-method.less',
})
export class PaymentMethodComponent {
  readonly cards = input.required<IPaymentCard[]>();
}
