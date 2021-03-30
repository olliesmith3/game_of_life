import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { GameBody } from '../../components/GameBody';

test('When the board is rendered it renders the medium size', () => {
  render(<GameBody />);
  const cells = screen.getAllByRole('button', {name: 'cell'});
  expect(cells).toHaveLength(400);
});

test('When the small size is selected the board changes size', () => {
  render(<GameBody />);
  const smallButton = screen.getByLabelText('Small'); 
  fireEvent.click(smallButton)
  const cells = screen.getAllByRole('button', {name: 'cell'});
  expect(cells).toHaveLength(100);
});

test('When the large size is selected the radio button is checked', () => {
  render(<GameBody />);
  const largeButton = screen.getByLabelText('Large'); 
  const mediumButton = screen.getByLabelText('Medium');
  const smallButton = screen.getByLabelText('Small');
  fireEvent.click(largeButton)
  expect(largeButton).toBeChecked();
  expect(mediumButton).not.toBeChecked();
  expect(smallButton).not.toBeChecked();
});

test('When the small size is selected and a single alive cell is simulated it dies', () => {
  render(<GameBody />);
  const smallButton = screen.getByLabelText('Small'); 
  fireEvent.click(smallButton)

  const cells = screen.getAllByRole('button', {name: 'cell'})
  fireEvent.click(cells[0])

  expect(cells[0]).toHaveAttribute('class', 'small alive-true');

  const playButton = screen.getByRole('button', {name: 'Next Step'})
  fireEvent.click(playButton);

  expect(cells[0]).toHaveAttribute('class', 'small alive-false');
});
