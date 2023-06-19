import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Window Width', () => {
  render(<App />);
  const windowWidth = screen.getByText(/The width of the window is/i);
  expect(windowWidth).toBeInTheDocument();
});

test('Window Height', () => {
  render(<App />);
  const windowHeight = screen.getByText(/The height of the window is/i);
  expect(windowHeight).toBeInTheDocument();
});
