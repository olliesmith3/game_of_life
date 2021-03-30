import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Board } from '../../components/Board';

test('When a cell is clicked it changes colour', () => {
  render(<Board initialValues={[
    [false,false,false],
    [false,true,true],
    [false,false,false]]}/>);
  const cells = screen.getAllByRole('button', {name: 'cell'})
  fireEvent.click(cells[0])

  expect(cells[0]).toHaveAttribute('class', 'alive-true');
  expect(cells[1]).toHaveAttribute('class', 'alive-false');
});