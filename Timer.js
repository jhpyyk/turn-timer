import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Timer() {
    const [seconds, setSeconds] = useState(10);

    return (
      <Text>
        {seconds}
      </Text>
    );
}