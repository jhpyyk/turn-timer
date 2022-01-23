import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import EndTurnButton from "./EndTurnButton";

export default function TimerScreen(props) {
  const playerArray = props.playerInfo;
  const [playerIndex, setPlayerIndex] = useState(0);
  const [playerInTurn, setPlayerInTurn] = useState(playerArray[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [startingTime, setStartingTime] = useState(Date.now());

  const endTurn = () => {
    playerArray[playerIndex] = playerInTurn;
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
    setDuration(playerTimeLeft);
    setTimerRunning(false);
  };

  const calculateTimeLeft = () => {
    let timeElapsed = Date.now() - startingTime;
    return playerInTurn.playerTimeLeft - timeElapsed;
  };

  useEffect(() => {
    if (!timerRunning || playerInTurn.playerTimeLeft <= 0) {
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setPlayerInTurn({ playerTimeLeft: calculateTimeLeft() });
      setStartingTime(Date.now());
    }, 100);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setPlayerInTurn(playerArray[playerIndex]);
    console.log(playerInTurn.playerTimeLeft);
  }, [playerIndex]);

  return (
    <View style={styles.container}>
      <EndTurnButton
        displayTime={playerInTurn.playerTimeLeft}
        playerColor={playerInTurn.playerColor}
        endTurn={endTurn}
        isTimerRunning={isTimerRunning}
        timerStart={timerStart}
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
