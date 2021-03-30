import React, { useState } from "react";

interface Props {
  getInitialValues: () => void;
  setBoardSize: React.Dispatch<React.SetStateAction<string>>; 
}

export const BoardSizeButtons: React.FC<Props> = ({setBoardSize, getInitialValues}) => {

  const handleInputChange = event => {
    setBoardSize(event.target.value);
    getInitialValues();
  };

  return (
    <div id="board-size-buttons">
      <h3>How big?</h3>
      <div onChange={handleInputChange}>
        <label><input type="radio" value="small" name="boardSize" defaultChecked />Small</label>
        <label><input type="radio" value="medium" name="boardSize" /> Medium</label>
        <label><input type="radio" value="large" name="boardSize" /> Large</label>
      </div>
    </div>
  )
}