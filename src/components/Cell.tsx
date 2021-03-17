import React, { useState } from "react";

interface Props {
}

export const Cell: React.FC<Props> = () => {

  const [alive, setAlive] = useState<boolean>(false);

  return (
    <button onClick={() => {setAlive(!alive)}} aria-label='cell' className={"alive-"+alive.toString()}></button>
  )
}