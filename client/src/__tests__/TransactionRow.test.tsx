import { render, fireEvent } from '@testing-library/react';
import TransactionRow from '../components/TransactionRow';

const sampleTransaction = {
  Class: 1,
  Time: '2023-09-21T12:00:00',
  Amount: 10.5,
  // TODO: include other values?
};

test('renders a checkbox that toggles the transaction Class', () => {

  const { getByRole } = render(
    <table>
      <tbody>
        <TransactionRow transaction={sampleTransaction} />
      </tbody>
    </table>
  );

  const checkbox = getByRole('checkbox');
  expect(checkbox).toBeChecked();

  // Simulate a click on the checkbox
  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
