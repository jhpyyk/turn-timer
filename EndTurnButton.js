import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function EndTurnButton() {
  const [text, setText] = useState('Start');

  return (
    <View>
      <TouchableOpacity style = {styles.buttonStyle}>
        <Text>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
    borderRadius: 300,
    backgroundColor: 'orange',
  },
});