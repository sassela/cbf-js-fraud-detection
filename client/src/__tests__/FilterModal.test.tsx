import { render, fireEvent } from '@testing-library/react';
import FilterModal from '../components/FilterModal';
import { BrowserRouter } from 'react-router-dom';

const mockOnSubmit = jest.fn();
const mockOnClose = jest.fn();

const mockRules = [
  { ruleName: 'Rule 1' },
  { ruleName: 'Rule 2' },
];

test('renders FilterModal component with rules', () => {
  const { getByText } = render(
    <BrowserRouter>
      <FilterModal rules={mockRules} onClose={mockOnClose} onSubmit={mockOnSubmit} />
    </BrowserRouter>
  );

  expect(getByText('Filter Rules')).toBeInTheDocument();

  mockRules.forEach((rule) => {
    expect(getByText(rule.ruleName)).toBeInTheDocument();
  });

  const selectedFilter = mockRules[0]

  fireEvent.click(getByText(selectedFilter.ruleName));
  fireEvent.click(getByText('Close'));

  expect(mockOnSubmit).toHaveBeenCalledWith(selectedFilter);
});

test('renders FilterModal component with no rules', () => {
  const { getByText } = render(
    <BrowserRouter>
      <FilterModal rules={[]} onClose={mockOnClose} onSubmit={mockOnSubmit} />
    </BrowserRouter>
  );

  expect(getByText(/No rules found./)).toBeInTheDocument();
  expect(getByText('Rules Page')).toHaveAttribute('href', '/rules');

  fireEvent.click(getByText('Close'));
  expect(mockOnSubmit).toHaveBeenCalledWith(null);
});
