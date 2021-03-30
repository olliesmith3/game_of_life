import React, { useState, useEffect } from "react";
import {Cell} from './Cell'

interface Props {
  initialValues?: boolean[][];
}

export const Board: React.FC<Props> = ({initialValues}) => {

  const [board, setBoard] = useState<boolean[][]>(initialValues);

  useEffect(() => {
    setBoard(initialValues);
  }, [initialValues]);

  const generateEmptyNeighbours = (rows: number) => {
    return new Array(rows).fill("").map(() => new Array(rows).fill(0));
  }

  const [emptyNeighbours, setEmptyNeighbours] = useState<number[][]>(generateEmptyNeighbours(20));

  const changeBoard = (row: number, cell: number) => {
    let newBoard = [...board];
    newBoard[row][cell] = !board[row][cell];
    setBoard(newBoard)
  }

  const calculateNeighbours = (rowNumber: number, cellNumber: number) => {
    let neighbours = 0
    for (let row=(rowNumber - 1); row < (rowNumber + 2); row++) {
      for (let cell = (cellNumber - 1); cell < (cellNumber + 2); cell++) {
        if (row === -1 || row === board.length || cell === -1 || cell === board.length ) {
          continue;
        } else if (row === rowNumber && cell === cellNumber) {
          continue;
        } else if (board[row][cell] === true) {
          neighbours += 1
        }
      }
    }
    return neighbours
  }

  const updateCell = (row: number, cell: number) => {
    if (board[row][cell] === false) {
      if (emptyNeighbours[row][cell] === 3) {
        return true
      } else {
        return false
      }
    } else {
      if (emptyNeighbours[row][cell] === 2 || emptyNeighbours[row][cell] === 3) {
        return true
      } else {
        return false
      }
    }
  }

  const nextStep = (board: boolean[][]) => {
    let nextNeighbours = [...emptyNeighbours]
    for (let row=0; row < board.length; row++) {
      for (let cell = 0; cell < board.length; cell++) {
        nextNeighbours[row][cell] = calculateNeighbours(row, cell)
      }
    }
    setEmptyNeighbours(nextNeighbours);

    let nextBoard = [...board]
    for (let row=0; row < board.length; row++) {
      for (let cell = 0; cell < board.length; cell++) {
        nextBoard[row][cell] = updateCell(row, cell)
      }
    }
    setBoard(nextBoard);
  }

  const cells = board.map((rowArray: boolean[], rowIndex: number) =>
    <ul key={"row" + rowIndex.toString()} className={"row"}>
      {rowArray.map((isAlive: boolean, cellIndex: number) =>
        <li key={rowIndex.toString() + cellIndex.toString()} className={"cell"}>
          <Cell isAlive={isAlive} changeBoard={changeBoard} coordinates={{row: rowIndex, cell: cellIndex}}/>
        </li>
      )}
    </ul>
  );

  return (
    <div data-testid='board'>
      <ul>{cells}</ul>
      <button onClick={() => nextStep(board)}>Next Step</button>
    </div>
  )
}