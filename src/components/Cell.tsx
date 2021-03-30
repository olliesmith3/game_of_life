import React, { useState } from "react";

interface Props {
  changeBoard?: (row: number, cell: number) => void;
  coordinates: {row: number, cell: number};
  isAlive: boolean;
  cellSize: string;
}

export const Cell: React.FC<Props> = ({changeBoard, coordinates, isAlive, cellSize}) => {

  const classes = `${cellSize} alive-${isAlive}`

  return (
    <button 
      onClick={() => {
        changeBoard(coordinates.row, coordinates.cell);
      }} 
      aria-label='cell' 
      className={classes}>
    </button>
  )
}