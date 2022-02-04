import { useState, useEffect } from "react";

export default function useTimer(time, playerIndex) {
  const [playerTime, setPlayerTime] = useState(time);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startingTime, setStartingTime] = useState(Date.now());

  const timerStart = () => {
    setStartingTime(Date.now());
    setIsTimerRunning(true);
  };

  const timerStop = () => {
    setIsTimerRunning(false);
  };

  const getTime = () => {
    return calculateTimeLeft();
  };

  const calculateTimeLeft = (timeStamp) => {
    let timeElapsed = timeStamp - startingTime;
    return playerTime - timeElapsed;
  };

  useEffect(() => {
    setStartingTime(Date.now());
    setPlayerTime(time);
  }, [time, playerIndex]);

  useEffect(() => {
    if (!isTimerRunning || playerTime < 0) {
      return () => clearTimeout(tick);
    }
    const tick = setTimeout(() => {
      let timeStamp = Date.now();
      setPlayerTime(calculateTimeLeft(timeStamp));
      setStartingTime(timeStamp);
    }, 50);

    return () => clearTimeout(tick);
  });
  return [playerTime, timerStart, timerStop, isTimerRunning, getTime];
}
