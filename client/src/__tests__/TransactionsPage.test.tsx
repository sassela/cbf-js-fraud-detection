import { render, screen } from '@testing-library/react';
import TransactionsPage from '../pages/TransactionsPage';

test('renders transactions', () => {
  render(<TransactionsPage />);
  const linkElement = screen.getByText(/transactions/i);
  expect(linkElement).toBeInTheDocument();
});
