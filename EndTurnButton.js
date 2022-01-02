import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useEffect } from "react/cjs/react.development";
import TimeDisplay from "./TimeDisplay";

export default function EndTurnButton(props) {
  const [buttonText, setButtonText] = useState('Start');

  const handlePress = () => {
    if (!props.isTimerRunning()) {
      props.startTimer();
    }
  }

  useEffect(() => {
    if (props.isTimerRunning()) {
      setButtonText('End turn');
    } else {
      setButtonText('Start')
    }
  });

  return (
    <TouchableOpacity
      style = {styles.buttonStyle}
      onPress = {handlePress}>
      <Text>
        {buttonText}
      </Text>
      <TimeDisplay duration = {props.duration} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 150,
    backgroundColor: 'orange',
  },
});