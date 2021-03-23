import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cell } from '../../components/Cell';

test('renders a cell', () => {
  render(<Cell  coordinates={{row: 0, cell: 0}} isAlive={true} />);
  const cell = screen.getByRole('button', { name: /cell/i});
  expect(cell).toBeInTheDocument();
});