type TransactionType
  = 'DEPOSIT'
  | 'WITHDRAWAL'
  | 'TRANSFER'
  | 'PAYMENT'

export interface Transaction {
  transactionId: string;
  accountId: string;
  date: Date;
  type: TransactionType;
  amount: number;
  description: string;
}
