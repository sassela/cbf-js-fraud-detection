import { useEffect, useState } from 'react';
import TransactionsTable from '../components/TransactionsTable';
import { ApiResponse } from '../types/ApiResponse';
import FilterModal from '../components/FilterModal';
import { Rule } from '../types/Rule';

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<ApiResponse | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [_selectedRule, setSelectedRule] = useState<Rule | null>(null);

  const [rules, setRules] = useState<Rule[]>([]);

  useEffect(() => {
    fetch('/transactions')
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const storedRules = JSON.parse(localStorage.getItem('rules') || '[]');
    setRules(storedRules);
  }, []);


  const handleFilterClick = () => {
    setShowFilterModal(true);
  };

  const handleModalClose = async (rule: Rule | null) => {
    setSelectedRule(rule);

    if(rule) {
      const requestBody: Record<string, number> = {};
      rule.properties.forEach((r) => {
        requestBody[r.propertyName] = r.propertyValue;
      });
      console.log(requestBody)

      try {
        const response = await fetch('/similar-transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: requestBody}),
        });

        if (response.ok) {
          const data = await response.json();
          setTransactions(data);
        } else {
          console.error('Error fetching similar transactions:', response.status);
        }
      } catch (error) {
        console.error('Error fetching similar transactions:', error);
      }
    }

    setShowFilterModal(false);
  };

  return (
    <div>
      <h2>Transactions</h2>
      <button className="btn btn-primary" onClick={handleFilterClick}>
        Filter
      </button>

      {transactions ? (
        <TransactionsTable transactions={transactions.hits.hits} />
      ) : (
        <p>Loading...</p>
      )}

      {showFilterModal && (
        <FilterModal
          rules={rules}
          onClose={() => setShowFilterModal(false)}
          onSubmit={handleModalClose}
        />
      )}
    </div>
  );
};

export default TransactionsPage;
