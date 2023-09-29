import { Hit } from '../types/Hit';
import Table from './Table';

interface TransactionTableProps {
  transaction: Hit;
}

const Head = () => {
  return (
    <tr>
      <th>Field</th>
      <th>Value</th>
    </tr>
  )
}

const Body = ({ transaction }: TransactionTableProps) => {
  return (
    <>
      {/* TODO: sort fields */}
      {Object.entries(transaction._source).map(([field, value]) => (
        <tr key={field}>
          <td>{field}</td>
          <td>{value}</td>
        </tr>
      ))}
    </>
  )
}

const TransactionTable = ({ transaction }: TransactionTableProps) => {
  return (
    <Table
      head={<Head />}
      body={<Body transaction={transaction} />}
    />
  );
};

export default TransactionTable;
