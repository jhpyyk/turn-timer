import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";

export default function EndTurnButton(props) {
  const [buttonText, setButtonText] = useState("Start");

  const handlePress = () => {
    if (props.isTimerRunning()) {
      props.endTurn();
    } else {
      props.timerStart();
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
      style={[styles.buttonStyle, { borderColor: props.color }]}
      onPress={handlePress}
      android_ripple={{
        foreground: true,
        color: "black",
        radius: 150,
      }}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{buttonText}</Text>
      <TimeDisplay timeToDisplay={props.timeToDisplay} fontSize={40} />
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
    borderWidth: 6,
  },
});
