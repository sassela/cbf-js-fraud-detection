import { Hit } from '../types/Hit';

interface TransactionTableProps {
  transaction: Hit;
}

const TransactionTable = ({ transaction }: TransactionTableProps) => {
  return (
    <div>

      <table className="table">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: sort fields */}
          {Object.entries(transaction._source).map(([field, value]) => (
            <tr key={field}>
              <td>{field}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
