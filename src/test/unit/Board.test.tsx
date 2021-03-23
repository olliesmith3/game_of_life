import React from 'react';
import { render, screen } from '@testing-library/react';
import { Board } from '../../components/Board';

test('renders the board', () => {
  render(<Board />);
  const board = screen.getByTestId('board');
  expect(board).toBeInTheDocument();
});

test('renders the correct number of cells', () => {
  render(<Board />);
  const cells = screen.getAllByRole('button', { name: /cell/i});
  expect(cells).toHaveLength(16);
});
