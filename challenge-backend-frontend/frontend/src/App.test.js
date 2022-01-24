import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Redux Agnostic', () => {
  render(<App />);
  const linkElement = screen.getByText(/Redux Agnostic/i);
  expect(linkElement).toBeInTheDocument();
});
