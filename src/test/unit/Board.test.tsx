import React from 'react';
import { render, screen } from '@testing-library/react';
import { Board } from '../../components/Board';

test('renders the board', () => {
  render(<Board 
    cellSize={"small"}
    initialValues={[[false,false,false], [false,false,false], [false,false,false]]}/>);
  const board = screen.getByTestId('board');
  expect(board).toBeInTheDocument();
});

test('renders 9 cells', () => {
  render(<Board 
    cellSize={"small"}
    initialValues={[[false,false,false], [false,false,false], [false,false,false]]}/>);
  const cells = screen.getAllByRole('button', { name: /cell/i});
  expect(cells).toHaveLength(9);
});

test('renders 16 cells', () => {
  render(<Board 
    cellSize={"small"}
    initialValues={[[false,false,false,false], [false,false,false,false], [false,false,false,false],[false,false,false,false]]}/>);
  const cells = screen.getAllByRole('button', { name: /cell/i});
  expect(cells).toHaveLength(16);
});
