import React from 'react'
import { Transaction } from '../types/Transaction';

interface TransactionRowProps {
  transaction: Transaction;
}

const TransactionRow = ({ transaction }: TransactionRowProps) => {
  const amount = transaction.Amount ? transaction.Amount.toFixed(2) : 'N/A';
  return (
    <tr>
      <td>{transaction.Class}</td>
      <td>{transaction.Time}</td>
      <td>£{amount}</td>
      <td>{transaction.V1}</td>
      <td>{transaction.V2}</td>
      <td>{transaction.V3}</td>
      <td>{transaction.V4}</td>
      <td>{transaction.V5}</td>
      <td>{transaction.V6}</td>
      <td>{transaction.V7}</td>
      <td>{transaction.V8}</td>
      <td>{transaction.V9}</td>
      <td>{transaction.V10}</td>
      <td>{transaction.V11}</td>
      <td>{transaction.V12}</td>
      <td>{transaction.V13}</td>
      <td>{transaction.V14}</td>
      <td>{transaction.V15}</td>
      <td>{transaction.V16}</td>
      <td>{transaction.V17}</td>
      <td>{transaction.V18}</td>
      <td>{transaction.V19}</td>
      <td>{transaction.V20}</td>
      <td>{transaction.V21}</td>
      <td>{transaction.V22}</td>
      <td>{transaction.V23}</td>
      <td>{transaction.V24}</td>
      <td>{transaction.V25}</td>
      <td>{transaction.V26}</td>
      <td>{transaction.V27}</td>
      <td>{transaction.V28}</td>
    </tr>
  );
};

export default TransactionRow;
