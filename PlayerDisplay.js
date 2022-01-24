import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";

export default function PlayerDisplay(props) {
  const [buttonOpacity, setOpacity] = useState(1);

  const handlePress = () => {};

  return (
    <View style={{ opacity: buttonOpacity }}>
      <Pressable
        style={[styles.buttonStyle, { backgroundColor: props.color }]}
        onPress={handlePress}
      >
        <Text>{props.name + ":   "}</Text>
        <TimeDisplay timeToDisplay={props.timeToDisplay} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    width: 200,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
  },
});
