import { render, fireEvent } from '@testing-library/react';
import Pagination from '../src/components/Pagination';

describe('Pagination', () => {
  it('renders page numbers and handles page change', () => {
    const totalItems = 100;
    const itemsPerPage = 10;
    const currentPage = 3;
    const onPageChange = jest.fn();

    const { getByText } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    );

    expect(getByText('First')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('Last')).toBeInTheDocument();

    fireEvent.click(getByText('5'));

    expect(onPageChange).toHaveBeenCalledWith(5);
  });

  it('disables "First" and "Last" buttons on first and last pages', () => {
    const totalItems = 100;
    const itemsPerPage = 10;
    const currentPage = 1;
    const onPageChange = jest.fn();

    const { getByText } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    );

    expect(getByText('First')).toBeDisabled;
    expect(getByText('Last')).not.toBeDisabled;

    fireEvent.click(getByText('Last'));

    expect(getByText('First')).not.toBeDisabled;
    expect(getByText('Last')).toBeDisabled;
  });

  it('"First" and "Last" buttons are not shown where there are few results', () => {
    const totalItems = 30;
    const itemsPerPage = 10;
    const currentPage = 1;
    const onPageChange = jest.fn();

    const { queryByText } = render(
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    );

    expect(queryByText('First')).not.toBeInTheDocument()
    expect(queryByText('Last')).not.toBeInTheDocument()
  });
});
