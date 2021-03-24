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

test('A board with a 2x2 square remains the same', () => {
  render(<Board initialValues={[
    [false,false,false,false],
    [false,true,true,false],
    [false,true,true,false],
    [false,false,false,false]
  ]}/>);

  const cells = screen.getAllByRole('button', {name: 'cell'})

  const playButton = screen.getByRole('button', {name: 'Next Step'})
  fireEvent.click(playButton);

  //The expressions below essentially ask if the board has remained unchanged

  for (let i = 5; i < 7; i++) {
    expect(cells[i]).toHaveAttribute('class', 'alive-true');
    expect(cells[i+4]).toHaveAttribute('class', 'alive-true');
  }

  for (let i = 0; i < 4; i++) {
    expect(cells[i]).toHaveAttribute('class', 'alive-false');
    expect(cells[i+12]).toHaveAttribute('class', 'alive-false');
  }

  for (let i = 4; i < 8; i += 3) {
    expect(cells[i]).toHaveAttribute('class', 'alive-false');
    expect(cells[i+4]).toHaveAttribute('class', 'alive-false');
  }
});