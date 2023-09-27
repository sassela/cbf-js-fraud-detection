
import { render } from '@testing-library/react';
import Layout from '../components/Layout';
import { BrowserRouter } from 'react-router-dom';

test('it renders navigation', () => {
  const navTitle = 'Fraud Detection App';

  const { getByText } = render(
    <BrowserRouter>
      <Layout>{<></>}</Layout>
    </BrowserRouter>
  );

  expect(getByText(navTitle)).toBeInTheDocument();
});

test('it renders children', () => {
  const mockChildren = <div data-testid="mock-child">Mock Child</div>;

  const { getByText, getByTestId } = render(
    <BrowserRouter>
      <Layout>{mockChildren}</Layout>
    </BrowserRouter>
  );

  expect(getByTestId('mock-child')).toBeInTheDocument();
  expect(getByText('Mock Child')).toBeInTheDocument();
});
