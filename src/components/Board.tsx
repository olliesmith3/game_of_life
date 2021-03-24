import React, { useState } from "react";
import {Cell} from './Cell'

interface Props {
  initialValues?: boolean[][];
}

export const Board: React.FC<Props> = ({initialValues}) => {

  const getInitialValues = () => {
    if (initialValues) {
      return initialValues
    } else {
      return [[false,false,false,false],
      [false,false,false,false],
      [false,false,false,false],
      [false,false,false,false]]
    }
  }

  const initialBoard = getInitialValues();

  const [board, setBoard] = useState<boolean[][]>(initialBoard);

  const changeBoard = (row: number, cell:number) => {
    const newBoard = [...board];
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
    let neighbours = calculateNeighbours(row, cell)
    if (board[row][cell] === false) {
      if (neighbours === 3) {
        return true
      } else {
        return false
      }
    } else {
      if (neighbours === 2 || neighbours === 3) {
        return true
      } else {
        return false
      }
    }
  }

  const nextStep = () => {
    const nextBoard = [...board]

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
      <button onClick={() => nextStep()}>Next Step</button>
    </div>
  )
}