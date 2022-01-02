import React, { useState } from "react";
import { View, Button, StyleSheet, Pressable, Text } from "react-native";

export default function PauseButton(props) {

  const [buttonText, setButtonText] = useState('Pause');

  return (
    <Pressable style = {styles.buttonStyle} >
      <Text>
        {buttonText}
      </Text>
    </Pressable>
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
    backgroundColor: 'orange',
  },
});