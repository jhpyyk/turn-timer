import React, { useState } from "react";
import Timer from "./Timer";

export default function Player(props) {
  const [playerTimeLeft, setPlayerTimeLeft] = useState(props.duration);

  const getPlayerTimeLeft = () => {
    return playerTimeLeft;
  };

  return (
    <Timer
      duration={props.duration}
      getPlayerTimeLeft={getPlayerTimeLeft}
      setPlayerTimeLeft={setPlayerTimeLeft}
    />
  );
}
