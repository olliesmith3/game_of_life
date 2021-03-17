import React, { useState } from "react";
import {Cell} from './Cell'

export const Board: React.FC = () => {

  const initialBoard = [[false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false]]

  const [board, setBoard] = useState<boolean[][]>(initialBoard);

  const changeBoard = (row: number, cell:number) => {
    const newBoard = [...board]
    newBoard[row][cell] = !board[row][cell]
    setBoard(newBoard)
  }

  const cells = board.map((rowArray: boolean[], rowIndex: number) =>
    <ul key={"row" + rowIndex.toString()} className={"row"}>
      {rowArray.map((alive: boolean, cellIndex: number) =>
        <li key={rowIndex.toString() + cellIndex.toString()} className={"cell"}>
          <Cell changeBoard={changeBoard} coordinates={{row: rowIndex, cell: cellIndex}}/>
        </li>
      )}
    </ul>
  );

  return (
    <div data-testid='board'>
      <ul>{cells}</ul>
    </div>
  )
}