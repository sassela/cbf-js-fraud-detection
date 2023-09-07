import { Transaction } from '../../Transaction';
import TransactionRow from './TransactionRow';

interface TransactionTableProps {
  transactions: Transaction[]
}

const TransactionTable = ({transactions}:TransactionTableProps) => {
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
          {transactions.map((transaction) => (
            <TransactionRow transaction={transaction}/>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
