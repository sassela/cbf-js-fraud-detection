import { render, screen } from '@testing-library/react';
import { Hit } from '../types/Hit';
import { Transaction } from '../types/Transaction';
import TransactionTable from '../components/TransactionTable';

test('it renders the transaction table correctly', () => {
  render(<TransactionTable transaction={mockHit} />);

  expect(screen.getByText('Field')).toBeInTheDocument();
  expect(screen.getByText('Value')).toBeInTheDocument();
});

const mockTransaction:Transaction = {
  Class: 1,
  Time: 1111,
  Amount: 10.5,
  V1: 0,
  V2: 0,
  V3: 0,
  V4: 0,
  V5: 0,
  V6: 0,
  V7: 0,
  V8: 0,
  V9: 0,
  V10: 0,
  V11: 0,
  V12: 0,
  V13: 0,
  V14: 0,
  V15: 0,
  V16: 0,
  V17: 0,
  V18: 0,
  V19: 0,
  V20: 0,
  V21: 0,
  V22: 0,
  V23: 0,
  V24: 0,
  V25: 0,
  V26: 0,
  V27: 0,
  V28: 0,
}

const mockHit:Hit = {
  _id: "0",
  _index: "0",
  _score: 0,
  _source: mockTransaction
};
