import React, { useState } from "react";
import {Cell} from './Cell'

export const Board: React.FC = () => {

  const initialBoard = [[false,false,false,false],
  [false,false,false,false],
  [false,false,false,false],
  [false,false,false,false]]

  const [board, setBoard] = useState<boolean[][]>(initialBoard);

  const changeBoard = (row: number, cell:number) => {
    board[row][cell] = !board[row][cell]
  }

  const cells = board.map((rowArray: boolean[], rowIndex: number) =>
    <ul key={"row" + rowIndex.toString()} className={"row"}>
      {rowArray.map((alive: boolean, cellIndex: number) =>
        <li key={rowIndex.toString() + cellIndex.toString()} className={"cell"}>
          <Cell />
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