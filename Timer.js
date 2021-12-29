import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

export default function Timer() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {

    if (seconds == 0) {
      return;
    }

    const timer = setTimeout(() => {
      setSeconds(s => s -1)
    }, 1000);


    return () => clearTimeout(timer);
  });

  return (
    <Text>
      {seconds}
    </Text>
  );
}