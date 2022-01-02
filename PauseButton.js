import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function PauseButton(props) {
  const [buttonOpacity, setButtonOpacity] = useState(0.5);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handlePressIn = () => {
    props.stopTimer();
  };

  useEffect(() => {
    if (props.isTimerRunning()) {
      setButtonOpacity(1);
      setButtonDisabled(false);
    } else {
      setButtonOpacity(0.5);
      setButtonDisabled(true);
    }
  });

  return (
    <View style={{ opacity: buttonOpacity }}>
      <Pressable
        style={styles.buttonStyle}
        onPressIn={handlePressIn}
        disabled={buttonDisabled}
      >
        <Text>{"Pause"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 100,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
    backgroundColor: "orange",
  },
});
