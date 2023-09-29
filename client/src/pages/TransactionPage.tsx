import { useEffect, useState } from 'react';
import TransactionTable from '../components/TransactionTable';
import { Hit } from '../types/Hit';
import { useLoaderData } from 'react-router-dom';
import Heading from '../components/Heading';

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
    <div className="column">
      <Heading headingText={`Transaction ${transactionId}`} />
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
