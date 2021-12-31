import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function TimeDisplay(props) {
  const [uiTime, setUiTime] = useState(0);

  const formatTime = (milliseconds) => {
    let minutes = Math.floor((milliseconds / 1000) / 60);
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let formattedTime = minutes.toString().padStart(2, '0') + ":"
                        + seconds.toString().padStart(2, '0');
    return formattedTime;
  };

  useEffect(() => {
    setUiTime(formatTime(props.duration));
  });

  return (
    <Text>
      {uiTime}
    </Text>
  );
}