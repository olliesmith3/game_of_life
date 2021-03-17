import React from 'react';
import { render, screen } from '@testing-library/react';
import Cell from '../../components/Cell';

test('renders a cell', () => {
  render(<Cell />);
  const cell = screen.getByText(/learn react/i);
  expect(cell).toBeInTheDocument();
});