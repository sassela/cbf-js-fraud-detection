import { Hit } from '../types/Hit';
import Table from './Table';
import TransactionRow from './TransactionRow';

interface TransactionsTableProps {
  transactions: Hit[];
}

const Head = () => {
  return (
    <tr>
      <th scope="col">Transaction ID</th>
      <th scope="col">Time</th>
      <th scope="col">Amount</th>
      <th scope="col"><div className='text-center'>Fraudulent?</div></th>
      <th scope="col"></th>
    </tr>
  )
}
const Body = ({ transactions }: TransactionsTableProps) => {
  return (
    <>
      {
        transactions.map((transaction, index) => (
          <TransactionRow key={index} transaction={transaction._source} id={transaction._id} />
        ))
      }
    </>
  )
}
const TransactionsTable = ({ transactions }: TransactionsTableProps) => {
  return (
    <Table
      head={<Head />}
      body={<Body transactions={transactions} />}
    />
  );
};

export default TransactionsTable;
