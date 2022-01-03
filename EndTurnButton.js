import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";

export default function EndTurnButton(props) {
  const [buttonText, setButtonText] = useState("Start");

  const handlePressIn = () => {
    if (!props.isTimerRunning()) {
      props.startTimer();
    }
  };

  useEffect(() => {
    if (props.isTimerRunning()) {
      setButtonText("End turn");
    } else {
      setButtonText("Start");
    }
  });

  return (
    <Pressable
      style={[styles.buttonStyle, { backgroundColor: props.color }]}
      onPressIn={handlePressIn}
      android_ripple={{
        foreground: true,
        color: "black",
        radius: 150,
      }}
    >
      <Text>{buttonText}</Text>
      <TimeDisplay duration={props.duration} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 150,
  },
});
