import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function Timer(props) {

  const [startTime, setStartTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(props.duration);
  const [uiTime, setUiTime] = useState(timeLeft / 1000);

  const calculateTimeLeft = () => {
    let timeElapsed = Date.now() - startTime;
    return props.duration - timeElapsed;
  };

  const formatTime = (milliseconds) => {
    let minutes = Math.floor((milliseconds / 1000) / 60);
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let formattedTime = minutes.toString().padStart(2, '0') + ":"
                        + seconds.toString().padStart(2, '0');
    return formattedTime;
  };

  useEffect(() => {

    if (timeLeft < 0) {
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setUiTime(formatTime(timeLeft));
    }, 100);


    return () => clearTimeout(timer);
  });

  return (
    <Text>
      {uiTime}
    </Text>
  );
}