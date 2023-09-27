import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Transaction } from '../types/Transaction';

interface TransactionRowProps {
  transaction: Transaction;
  id: string;
}

const TransactionRow = ({ transaction, id }: TransactionRowProps) => {
  const [isChecked, setIsChecked] = useState(transaction.Class === 1);
  const navigate = useNavigate();

  const toggleCheckbox = () => {
    const updatedClass = isChecked ? 0 : 1;
    setIsChecked(!isChecked);
    // TODO: ES call
    const updatedTransaction = { ...transaction, Class: updatedClass };
    console.log(updatedTransaction);
  };

  const handleViewDetailClick = () => {
    navigate(`/transaction/${id}`);
  };

  return (
    <tr>
      <td>{id}</td>
      <td className="text-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
      </td>
      <td>{transaction.Time}</td>
      <td>£{transaction.Amount ? transaction.Amount.toFixed(2) : 'N/A'}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleViewDetailClick}
        >
          View detail
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;
