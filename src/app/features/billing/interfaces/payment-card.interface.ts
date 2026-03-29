export type PaymentBrand = 'mastercard' | 'visa';

export interface IPaymentCard {
  brand: PaymentBrand;
  last4: string;
}
