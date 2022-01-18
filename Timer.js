import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import EndTurnButton from "./EndTurnButton.js";
import PauseButton from "./PauseButton.js";

export default function Timer(props) {
  const [startingTime, setStartingTime] = useState(Date.now());
  const [duration, setDuration] = useState(props.duration);
  const [timerRunning, setTimerRunning] = useState(false);
  const [playerTimeLeft, setPlayerTimeLeft] = useState(props.duration);

  const calculateTimeLeft = () => {
    let timeElapsed = Date.now() - startingTime;
    return duration - timeElapsed;
  };

  const isTimerRunning = () => {
    return timerRunning;
  };

  const startTimer = () => {
    setStartingTime(Date.now());
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setDuration(playerTimeLeft);
    setTimerRunning(false);
  };

  useEffect(() => {
    if (!timerRunning || playerTimeLeft <= 0) {
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setPlayerTimeLeft(calculateTimeLeft());
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <EndTurnButton
        duration={playerTimeLeft}
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        nextPlayer={props.nextPlayer}
        color={props.playerColor}
      />
      <PauseButton
        isTimerRunning={isTimerRunning}
        stopTimer={stopTimer}
        color={props.playerColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
