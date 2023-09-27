import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders transactions', () => {
  render(<App />);
  const linkElement = screen.getByText(/Transactions/i);
  expect(linkElement).toBeInTheDocument();
});
