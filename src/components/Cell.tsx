import React, { useState } from "react";

interface Props {
}

export const Cell: React.FC<Props> = () => {

  const [alive, setAlive] = useState<boolean>(false);

  return (
    <button aria-label='cell' className={"alive-"+alive.toString()}></button>
  )
}