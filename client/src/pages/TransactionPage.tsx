import { Transaction } from '../types/Transaction';
import TransactionTable from '../components/TransactionTable';

const sampleTransactions: Transaction[] = [
  {
    transactionId: '1',
    accountId: 'A123',
    date: new Date(),
    type: 'DEPOSIT',
    amount: 1000.0,
    description: 'Initial deposit',
  },
  {
    transactionId: '2',
    accountId: 'A123',
    date: new Date(),
    type: 'WITHDRAWAL',
    amount: -500.0,
    description: 'ATM Withdrawal',
  },
];

const TransactionPage = () => {
  return (
    <TransactionTable transactions={sampleTransactions}/>
  );
};

export default TransactionPage;
