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
    setIsChecked(!isChecked);
  };

  const handleViewDetailClick = () => {
    navigate(`/transaction/${id}`);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{transaction.Time}</td>
      <td>£{transaction.Amount ? transaction.Amount.toFixed(2) : 'N/A'}</td>
      <td className="text-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
      </td>
      <td className='text-center'>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={handleViewDetailClick}
        >
          View detail
        </button>
      </td>
    </tr>
  );
};

export default TransactionRow;
