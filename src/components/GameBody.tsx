import React, { useState, useEffect } from "react";
import {Board} from './Board'
import { BoardSizeButtons } from "./BoardSizeButtons";

export const GameBody: React.FC = () => {

  const [boardSize, setBoardSize] = useState<string>("small");

  useEffect(() => {
    getInitialValues();
  }, [boardSize]);

  const getInitialValues = () => {
    if (boardSize === "small") {
      setInitialValues(generateEmptyBoard(6))
    } else if (boardSize === "medium") {
      setInitialValues(generateEmptyBoard(8))
    } else if (boardSize === "large") {
      setInitialValues(generateEmptyBoard(10))
    } else {
      setInitialValues(generateEmptyBoard(4))
    }
  }

  const generateEmptyBoard = (rows: number) => {
    return new Array(rows).fill("").map(() => new Array(rows).fill(false));
  }

  const [initialValues, setInitialValues] = useState<boolean[][]>(generateEmptyBoard(6));

  return (
    <div>
      <BoardSizeButtons setBoardSize={setBoardSize} getInitialValues={getInitialValues}/>
      <Board initialValues={initialValues}/>
      <button onClick={() => {
        console.log(initialValues)
      }}></button>
    </div>
  )
}