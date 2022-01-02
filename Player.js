import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";

export default function Player(props) {
  const [timeLeft, setTimeLeft] = useState(props.duration);
  return (
    <Pressable style={styles.boxStyle}>
      <TimeDisplay duration={timeLeft} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boxStyle: {
    width: 150,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
    backgroundColor: "orange",
  },
});
