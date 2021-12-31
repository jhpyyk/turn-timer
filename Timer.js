import React, { useEffect, useState } from 'react';
import TimeDisplay from './TimeDisplay';

export default function Timer(props) {

  const [startTime, setStartTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(props.duration);

  const calculateTimeLeft = () => {
    let timeElapsed = Date.now() - startTime;
    return props.duration - timeElapsed;
  };

  useEffect(() => {

    if (timeLeft < 0) {
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 100);

    return () => clearTimeout(timer);
  });

  return (
    <TimeDisplay duration = {timeLeft}/>
  );
}