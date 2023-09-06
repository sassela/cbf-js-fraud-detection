import { Transaction } from '../../Transaction';

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
    <div>
      <h1>Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Account ID</th>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {sampleTransactions.map((transaction) => (
            <tr key={transaction.transactionId}>
              <td>{transaction.transactionId}</td>
              <td>{transaction.accountId}</td>
              <td>{transaction.date.toLocaleDateString()}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount.toFixed(2)}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionPage;
