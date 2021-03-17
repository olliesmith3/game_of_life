import React, { useState } from "react";

interface Props {
  changeBoard: (row: number, cell: number) => void;
  coordinates: {row: number, cell: number}
}

export const Cell: React.FC<Props> = ({changeBoard, coordinates}) => {

  const [alive, setAlive] = useState<boolean>(false);

  return (
    <button 
      onClick={() => {
        setAlive(!alive); 
        changeBoard(coordinates.row, coordinates.cell);
      }} 
      aria-label='cell' 
      className={"alive-"+alive.toString()}>
    </button>
  )
}