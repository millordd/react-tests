import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Home } from '../src/pages/Home';

test('renders home page greeting', () => {
  render(<Home />);
  expect(screen.getByText(/home.greeting/i)).toBeInTheDocument();
});
