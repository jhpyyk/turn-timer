import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import TimeDisplay from "./TimeDisplay";

export default function EndTurnButton(props) {
  const [text, setText] = useState('Start');

  const handlePress = () => {
    if (props.isTimerRunning()) {
      setText('End turn');
      props.stopTimer();
    } else {
      props.startTimer();
    }
  }

  return (
    <TouchableOpacity
      style = {styles.buttonStyle}
      onPress = {handlePress}>
      <Text>
        {text}
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