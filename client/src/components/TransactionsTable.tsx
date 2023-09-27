import { Hit } from '../types/Hit';
import TransactionRow from './TransactionRow';

interface TransactionsTableProps {
  transactions: Hit[];
}

const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Transaction ID</th>
            <th scope="col">Fraudulent?</th>
            <th scope="col">Time</th>
            <th scope="col">Amount</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TransactionRow key={index} transaction={transaction._source} id={transaction._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
