import React, { useState } from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";
import { useEffect } from "react/cjs/react.development";

export default function PauseButton(props) {

  const [buttonText, setButtonText] = useState('Pause');
  const [buttonOpacity, setButtonOpacity] = useState(0.5);

  const handlePress = () => {
      props.stopTimer();
  }

  useEffect(() => {
    if (props.isTimerRunning()) {
      setButtonOpacity(1);
    } else {
      setButtonOpacity(0.5);
    }
  });

  return (
    <View style = {{opacity: buttonOpacity}}>
      <Pressable
        style = {styles.buttonStyle}
        onPress= {handlePress}
      >
        <Text>
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'orange'
  },
});