import { render, screen } from '@testing-library/react';
import TransactionPage from './TransactionPage';

test('renders transactions', () => {
  render(<TransactionPage />);
  const linkElement = screen.getByText(/transactions/i);
  expect(linkElement).toBeInTheDocument();
});
