import React, { useEffect, useState } from 'react';
import TransactionsTable from '../components/TransactionsTable';
import { ApiResponse } from '../types/ApiResponse';

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<ApiResponse | null>(null);

  useEffect(() => {
    // Fetch data from the /transactions endpoint
    fetch('/transactions')
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
      <h2>Transactions</h2>
      {/* TODO: use Loading component */}
      {transactions ? (
        <TransactionsTable transactions={transactions.hits.hits} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TransactionsPage;
