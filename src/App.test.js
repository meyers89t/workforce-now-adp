import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main components', () => {
  render(<App />);
  expect(screen.getByText(/Expense Form/i)).toBeInTheDocument();
});
