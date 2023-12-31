import { render, fireEvent } from '@testing-library/react';
import TransactionRow from '../components/TransactionRow';
import { Transaction } from '../types/Transaction';

// copied from https://stackoverflow.com/a/70301823
const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUsedNavigate,
}));

test('renders a checkbox that toggles the transaction Class', () => {

  const { getByRole } = render(
    <table>
      <tbody>
        <TransactionRow transaction={mockTransaction} id={"1"} />
      </tbody>
    </table>
  );

  const checkbox = getByRole('checkbox');
  expect(checkbox).toBeChecked();

  // Simulate a click on the checkbox
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});

const mockTransaction: Transaction = {
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
