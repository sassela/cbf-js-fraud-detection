import { Transaction } from '../../Transaction';

interface TransactionRowProps {
  transaction: Transaction
}

const TransactionRow = ({ transaction }: TransactionRowProps) => {
  return (
    <tr key={transaction.transactionId}>
      <td>{transaction.transactionId}</td>
      <td>{transaction.accountId}</td>
      <td>{transaction.date.toLocaleDateString()}</td>
      <td>{transaction.type}</td>
      <td>£{transaction.amount.toFixed(2)}</td>
      <td>{transaction.description}</td>
    </tr>
  )
};

export default TransactionRow;
