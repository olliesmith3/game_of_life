import { render, fireEvent, screen } from '@testing-library/react';
import { Board } from '../../components/Board';

test('When a board with a single alive cell is simulated it dies', () => {
  render(<Board />);
  const cells = screen.getAllByRole('button', {name: 'cell'})
  fireEvent.click(cells[0])

  expect(cells[0]).toHaveAttribute('class', 'alive-true');

  const playButton = screen.getByRole('button', {name: 'Next Step'})
  fireEvent.click(playButton);

  expect(cells[0]).toHaveAttribute('class', 'alive-false');
});