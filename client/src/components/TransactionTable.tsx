import { Transaction } from '../types/Transaction';
import TransactionRow from './TransactionRow';

interface TransactionTableProps {
  transactions: Transaction[]
}

const TransactionTable = ({transactions}:TransactionTableProps) => {
  return (
    <div>
      <h1>Transactions</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Account ID</th>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
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
