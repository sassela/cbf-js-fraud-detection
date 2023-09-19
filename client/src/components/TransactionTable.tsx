import React from 'react'
import { Hit } from '../types/Hit';
import TransactionRow from './TransactionRow';

interface TransactionTableProps {
  transactions: Hit[];
}

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Class</th>
            <th scope="col">Time</th>
            <th scope="col">Amount</th>
            <th scope="col">V1</th>
            <th scope="col">V2</th>
            <th scope="col">V3</th>
            <th scope="col">V4</th>
            <th scope="col">V5</th>
            <th scope="col">V6</th>
            <th scope="col">V7</th>
            <th scope="col">V8</th>
            <th scope="col">V9</th>
            <th scope="col">V10</th>
            <th scope="col">V11</th>
            <th scope="col">V12</th>
            <th scope="col">V13</th>
            <th scope="col">V14</th>
            <th scope="col">V15</th>
            <th scope="col">V16</th>
            <th scope="col">V17</th>
            <th scope="col">V18</th>
            <th scope="col">V19</th>
            <th scope="col">V20</th>
            <th scope="col">V21</th>
            <th scope="col">V22</th>
            <th scope="col">V23</th>
            <th scope="col">V24</th>
            <th scope="col">V25</th>
            <th scope="col">V26</th>
            <th scope="col">V27</th>
            <th scope="col">V28</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TransactionRow key={index} transaction={transaction._source} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
