import { render, fireEvent, screen } from '@testing-library/react';
import { Board } from '../../components/Board';

test('When a board with a single alive cell is simulated it dies', () => {
  render(<Board initialValues={[
    [false,false,false,false],
    [false,true,true,false],
    [false,true,true,false],
    [false,false,false,false]]} />);
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

  const deadCellIndexes = [0,1,2,3,4,7,8,11,12,13,14,15]
  deadCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-false');
  })

  const aliveCellIndexes = [5,6,9,10]
  aliveCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-true');
  })
});

test('A board with a "C" shape goes through expected 4 next boards', () => {
  render(<Board initialValues={[
    [false,true,true,false],
    [false,true,false,false],
    [false,true,true,false],
    [false,false,false,false]
  ]}/>);

  const cells = screen.getAllByRole('button', {name: 'cell'})

  const playButton = screen.getByRole('button', {name: 'Next Step'})

  fireEvent.click(playButton);
  let deadCellIndexes = [0,3,5,6,7,8,11,12,13,14,15];
  deadCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-false');
  });
  let aliveCellIndexes = [1,2,4,9,10];
  aliveCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-true');
  });

  fireEvent.click(playButton);
  deadCellIndexes = [0,2,3,5,6,7,8,10,11,12,13,14,15];
  deadCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-false');
  });
  aliveCellIndexes = [1,4,9];
  aliveCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-true');
  });

  fireEvent.click(playButton);
  deadCellIndexes = [0,1,2,3,6,7,8,9,10,11,12,13,14,15];
  deadCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-false');
  });
  aliveCellIndexes = [4,5];
  aliveCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-true');
  });

  fireEvent.click(playButton);
  deadCellIndexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  deadCellIndexes.forEach(function(number) {
    expect(cells[number]).toHaveAttribute('class', 'alive-false');
  });

});