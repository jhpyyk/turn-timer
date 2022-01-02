import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import EndTurnButton from './EndTurnButton.js';
import PauseButton from './PauseButton.js';

export default function Timer(props) {

  const [startingTime, setStartingTime] = useState(Date.now());
  const [duration, setDuration] = useState(props.duration)
  const [timeLeft, setTimeLeft] = useState(duration);
  const [timerRunning, setTimerRunning] = useState(false);

  const calculateTimeLeft = () => {
    let timeElapsed = Date.now() - startingTime;
    return duration - timeElapsed;
  };

  const isTimerRunning = () => {
    return timerRunning;
  }

  const startTimer = () => {
    setStartingTime(Date.now());
    setTimerRunning(true);
  }

  const stopTimer = () => {
    setDuration(timeLeft);
    setTimerRunning(false);
  }

  useEffect(() => {

    if (!timerRunning || (timeLeft <= 0)) {
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <View style = {styles.container}>
      <EndTurnButton
        duration = {timeLeft}
        isTimerRunning = {isTimerRunning}
        startTimer = {startTimer}
        stopTimer = {stopTimer}
      />
      <PauseButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});