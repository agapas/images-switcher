import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders App content', () => {
  const { getByText } = render(<App />);
  const content = getByText(/some content/i);
  expect(content).toBeInTheDocument();
});
