import { render, screen } from '@testing-library/react';
import ErrorPage from '../pages/ErrorPage';

// copied from https://stackoverflow.com/a/70301823
const mockUseRouteError = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: () => mockUseRouteError
}));


test('it renders the error page with the standard error message', () => {
  render(<ErrorPage />);
  const errorMessage = screen.getByText('Sorry, an unexpected error has occurred.');
  expect(errorMessage).toBeInTheDocument();
});
