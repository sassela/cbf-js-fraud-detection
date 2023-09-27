import { useEffect, useState } from 'react';
import TransactionTable from '../components/TransactionTable';
import { Hit } from '../types/Hit';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }: any) {
  const transactionId = params.id;
  return { transactionId };
}

const TransactionPage = () => {
  const [transaction, setTransaction] = useState<Hit | null>(null);
  const { transactionId } = useLoaderData() as { transactionId: [] }

  useEffect(() => {
    fetch('/transaction/' + transactionId)
      .then((response) => response.json())
      .then((data: Hit) => {
        setTransaction(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Transaction {transactionId}</h2>
      {transaction ? (
        <div>
          <TransactionTable transaction={transaction} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>

  );
};

export default TransactionPage;
