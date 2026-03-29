import { Injectable } from '@angular/core';

import { ITab } from '../../../shared';
import { IBillingContact, IInvoice, IPaymentCard, ITransactionGroup } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class BillingDataService {
  readonly tabs: ITab[] = [
    { id: 'messages', label: 'Messages' },
    { id: 'social', label: 'Social' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'backup', label: 'Backup' },
  ];

  readonly paymentCards: IPaymentCard[] = [
    { brand: 'mastercard', last4: '7852' },
    { brand: 'visa', last4: '5248' },
  ];

  readonly contacts: IBillingContact[] = [
    { name: 'Oliver Liam', company: 'Viking Burrito', email: 'oliver@burrito.com', vatNumber: 'FRB1235476' },
    { name: 'Lucas Harper', company: 'Stone Tech Zone', email: 'lucas@stone-tech.com', vatNumber: 'FRB1235476' },
    { name: 'Ethan James', company: 'Fiber Notion', email: 'ethan@fiber.com', vatNumber: 'FRB1235476' },
  ];

  readonly invoices: IInvoice[] = [
    { date: 'March, 01, 2020', number: '#MS-415646', amount: '$180' },
    { date: 'February, 10, 2021', number: '#RV-126749', amount: '$250' },
    { date: 'April, 05, 2020', number: '#FB-212562', amount: '$560' },
    { date: 'June, 25, 2019', number: '#QW-103578', amount: '$120' },
    { date: 'March, 01, 2020', number: '#AR-803481', amount: '$200' },
  ];

  readonly transactionGroups: ITransactionGroup[] = [
    {
      label: 'Newest',
      items: [
        {
          icon: 'keyboard_arrow_down',
          color: 'red',
          name: 'Netflix',
          date: '27 March 2020, 11:30 PM',
          amount: '- $ 2,500',
          type: 'negative',
        },
        {
          icon: 'keyboard_arrow_up',
          color: 'green',
          name: 'Apple',
          date: '27 March 2020, 4:30 AM',
          amount: '+ $ 2,000',
          type: 'positive',
        },
      ],
    },
    {
      label: 'Yesterday',
      items: [
        {
          icon: 'keyboard_arrow_up',
          color: 'green',
          name: 'Stripe',
          date: '26 March 2020, 11:30 PM',
          amount: '+ $ 750',
          type: 'positive',
        },
        {
          icon: 'keyboard_arrow_up',
          color: 'green',
          name: 'HubSpot',
          date: '26 March 2020, 11:30 PM',
          amount: '+ $ 1,000',
          type: 'positive',
        },
        {
          icon: 'keyboard_arrow_up',
          color: 'green',
          name: 'Creative Tim',
          date: '26 March 2020, 9:30 AM',
          amount: '+ $ 2,500',
          type: 'positive',
        },
        {
          icon: 'priority_high',
          color: 'dark-blue',
          name: 'Webflow',
          date: '26 March 2020, 12:00 AM',
          amount: 'Pending',
          type: 'pending',
        },
      ],
    },
  ];
}
