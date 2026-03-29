import { Component, inject } from '@angular/core';

import { TabsComponent } from '../../shared';
import { BillingInfoComponent } from './components/billing-info/billing-info';
import { CreditCardComponent } from './components/credit-card/credit-card';
import { InvoicesComponent } from './components/invoices/invoices';
import { PaymentMethodComponent } from './components/payment-method/payment-method';
import { PaymentWidgetsComponent } from './components/payment-widgets/payment-widgets';
import { TransactionsComponent } from './components/transactions/transactions';
import { BillingDataService } from './services';

@Component({
  selector: 'app-billing',
  imports: [
    BillingInfoComponent,
    CreditCardComponent,
    InvoicesComponent,
    PaymentMethodComponent,
    PaymentWidgetsComponent,
    TabsComponent,
    TransactionsComponent,
  ],
  templateUrl: './billing.html',
  styleUrl: './billing.less',
})
export class BillingComponent {
  private readonly billingData: BillingDataService = inject(BillingDataService);
  readonly tabs = this.billingData.tabs;
  readonly paymentCards = this.billingData.paymentCards;
  readonly contacts = this.billingData.contacts;
  readonly invoices = this.billingData.invoices;
  readonly transactionGroups = this.billingData.transactionGroups;
}
