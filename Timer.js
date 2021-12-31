import React, { useEffect, useState } from 'react';
import TimeDisplay from './TimeDisplay';
import EndTurnButton from './EndTurnButton';
import { View } from 'react-native';

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
    <View>
      <EndTurnButton
        duration = {timeLeft}
        isTimerRunning = {isTimerRunning}
        startTimer = {startTimer}
        stopTimer = {stopTimer}
      />
    </View>
  );
}