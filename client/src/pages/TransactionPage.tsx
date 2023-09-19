import React, { useEffect, useState } from 'react';
import TransactionTable from '../components/TransactionTable';
import { ApiResponse } from '../types/ApiResponse';

const TransactionPage: React.FC = () => {
  const [transactions, setTransactions] = useState<ApiResponse | null>(null);

  useEffect(() => {
    // Fetch data from the /transactions endpoint
    // TODO: API URL in env var
    fetch('http://localhost:3001/transactions')
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      {/* TODO: use Loading component */}
      {transactions ? (
        <TransactionTable transactions={transactions.hits.hits} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TransactionPage;
