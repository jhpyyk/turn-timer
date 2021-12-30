import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function Timer(props) {

  const [startTime, setStartTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(props.duration);
  const [uiSeconds, setUiSeconds] = useState(timeLeft % 1000);

  const calculateTimeLeft = () => {
    let timeElapsed = Date.now() - startTime;
    return props.duration - timeElapsed;
  };

  const formatTime = (milliseconds) => {
    let time = {
      minutes: Math.floor((milliseconds / 1000) / 60),
      seconds: Math.floor(milliseconds / 1000)
    };
    return time;
  };

  useEffect(() => {

    if (timeLeft < 0) {
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setUiSeconds(formatTime(timeLeft).seconds);
    }, 100);


    return () => clearTimeout(timer);
  });

  return (
    <Text>
      {uiSeconds}
    </Text>
  );
}