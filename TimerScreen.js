import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import EndTurnButton from "./EndTurnButton";
import PauseButton from "./PauseButton";
import PlayerList from "./PlayerList";

export default function TimerScreen(props) {
  const [playerArray, setPlayerArray] = useState([...props.playerInfo]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [startingTime, setStartingTime] = useState(Date.now());
  let timeStamp;

  const endTurn = () => {
    updatePlayerTime();
    if (playerIndex + 1 >= playerArray.length) {
      setPlayerIndex(0);
    } else {
      setPlayerIndex(playerIndex + 1);
    }
  };

  const isTimerRunning = () => {
    return timerRunning;
  };

  const timerStart = () => {
    setStartingTime(Date.now());
    setTimerRunning(true);
  };

  const timerStop = () => {
    updatePlayerTime();
    setTimerRunning(false);
  };

  const updatePlayerTime = () => {
    let temp = [...playerArray];
    temp[playerIndex].timeLeft = calculateTimeLeft();
    setPlayerArray(temp);
  };

  const calculateTimeLeft = () => {
    timeStamp = Date.now();
    let timeElapsed = timeStamp - startingTime;
    return playerArray[playerIndex].timeLeft - timeElapsed;
  };

  useEffect(() => {
    if (!timerRunning || playerArray[playerIndex].timeLeft <= 0) {
      return () => clearTimeout(tick);
    }

    const tick = setTimeout(() => {
      updatePlayerTime(calculateTimeLeft());
      setStartingTime(timeStamp);
    }, 50);

    return () => clearTimeout(tick);
  });

  useEffect(() => {
    setStartingTime(Date.now());
  }, [playerIndex]);

  return (
    <View style={styles.container}>
      <PlayerList
        playerArray={playerArray}
        timeToDisplay={playerArray[playerIndex].timeLeft}
        playerIndex={playerIndex}
      />
      <EndTurnButton
        timeToDisplay={playerArray[playerIndex].timeLeft}
        color={playerArray[playerIndex].color}
        endTurn={endTurn}
        isTimerRunning={isTimerRunning}
        timerStart={timerStart}
      />
      <PauseButton
        timerStop={timerStop}
        isTimerRunning={isTimerRunning}
        color={playerArray[playerIndex].color}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C2833",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
