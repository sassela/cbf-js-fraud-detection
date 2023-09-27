import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('it renders navigation correctly', () => {
  const navTitle = 'Fraud Detection App';

  render(
    <Router>
      <Navigation />
    </Router>
  );

  expect(screen.getByText(navTitle)).toBeInTheDocument();
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Rules')).toBeInTheDocument();
});
