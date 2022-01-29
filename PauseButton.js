import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function PauseButton(props) {
  const [buttonOpacity, setButtonOpacity] = useState(0.15);
  const [buttonDisabled, setButtonDisabled] = useState(false);

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
        style={[styles.buttonStyle, { borderColor: props.color }]}
        onPress={props.timerStop}
        disabled={buttonDisabled}
      >
        {props.children}
        <Text style={{ color: "white", fontSize: 20 }}>{"Pause"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
    borderWidth: 4,
  },
});
