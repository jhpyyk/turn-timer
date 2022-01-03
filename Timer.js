import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import EndTurnButton from "./EndTurnButton.js";
import PauseButton from "./PauseButton.js";

export default function Timer(props) {
  const [startingTime, setStartingTime] = useState(Date.now());
  const [duration, setDuration] = useState(props.duration);
  const [timerRunning, setTimerRunning] = useState(false);

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
    setDuration(props.getPlayerTimeLeft());
    setTimerRunning(false);
  };

  useEffect(() => {
    if (!timerRunning || props.getPlayerTimeLeft() <= 0) {
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      props.setPlayerTimeLeft(calculateTimeLeft());
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <View style={styles.container}>
      <EndTurnButton
        duration={props.getPlayerTimeLeft()}
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
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
