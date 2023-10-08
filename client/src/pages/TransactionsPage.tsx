import { useEffect, useState } from 'react';
import TransactionsTable from '../components/TransactionsTable';
import { ApiResponse } from '../types/ApiResponse';
import FilterModal from '../components/FilterModal';
import { Rule } from '../types/Rule';
import HeaderRow from '../components/HeaderRow';
import Pagination from '../components/Pagination';


const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<ApiResponse | null>(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [_selectedRule, setSelectedRule] = useState<Rule | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rules, setRules] = useState<Rule[]>([]);
  const startIndex = 0;
  const itemsPerPage = 30;
  // hardcoded due to funny behaviour when fetching the count via the API
  const transactionsCount = 10000;

  const getTransactions = (from:number, size:number) => {
    const queryParams = new URLSearchParams({
      from: from.toString(),
      size: size.toString()
    });

    fetch(`/transactions?${queryParams}`)
      .then((response) => response.json())
      .then((data: ApiResponse) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  useEffect(() => {
    getTransactions(startIndex, itemsPerPage)
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

    if (rule) {
      const requestBody: Record<string, number> = {};
      rule.properties.forEach((r) => {
        requestBody[r.propertyName] = r.propertyValue;
      });

      try {
        // fetch similar transactions that closely match the given rule
        const response = await fetch('/similar-transactions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query: requestBody }),
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

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);

    // update the page number
    const fromValue = (newPage - 1) * itemsPerPage;

    // fetch the transactions on that page
    getTransactions(fromValue, itemsPerPage)
  };

  return (
    <>
      <HeaderRow
        headingText='Transactions'
        ctaOnClick={handleFilterClick}
        ctaText='Filter'
      />
      {
        transactions ? (
          <>
          <Pagination
              totalItems={transactionsCount}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          <TransactionsTable transactions={transactions.hits.hits} />
          <Pagination
              totalItems={transactionsCount}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            </>
        ) : (
          <p>Loading...</p>
        )}

      {
        showFilterModal && (
          <FilterModal
            rules={rules}
            onClose={() => setShowFilterModal(false)}
            onSubmit={handleModalClose}
          />
        )
      }
    </>

  );
};

export default TransactionsPage;
