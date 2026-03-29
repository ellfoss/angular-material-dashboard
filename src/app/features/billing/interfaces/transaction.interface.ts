export type TransactionType = 'positive' | 'negative' | 'pending';

export interface ITransaction {
  initial: string;
  color: string;
  name: string;
  date: string;
  amount: string;
  type: TransactionType;
}

export interface ITransactionGroup {
  label: string;
  items: ITransaction[];
}
