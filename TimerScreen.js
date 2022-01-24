import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import EndTurnButton from "./EndTurnButton";
import PauseButton from "./PauseButton";

export default function TimerScreen(props) {
  const [playerArray, setPlayerArray] = useState(props.playerInfo);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [startingTime, setStartingTime] = useState(Date.now());
  const [timeToDisplay, setTimeToDisplay] = useState(
    props.playerInfo[0].playerTimeLeft
  );

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
    temp[playerIndex].playerTimeLeft = calculateTimeLeft();
    setPlayerArray(temp);
  };

  const calculateTimeLeft = () => {
    let timeElapsed = Date.now() - startingTime;
    let time = playerArray[playerIndex].playerTimeLeft - timeElapsed;
    return time;
  };

  useEffect(() => {
    if (!timerRunning || playerArray[playerIndex].playerTimeLeft <= 0) {
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setTimeToDisplay(calculateTimeLeft());
    }, 100);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setStartingTime(Date.now());
  }, [playerIndex]);

  return (
    <View style={styles.container}>
      <EndTurnButton
        displayTime={timeToDisplay}
        playerColor={playerArray[playerIndex].playerColor}
        endTurn={endTurn}
        isTimerRunning={isTimerRunning}
        timerStart={timerStart}
      />
      <PauseButton
        timerStop={timerStop}
        isTimerRunning={isTimerRunning}
        color={playerArray[playerIndex].playerColor}
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
