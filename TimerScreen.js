import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Player from "./Player.js";

export default function TimerScreen(props) {
  const [playerArray, setPlayerArray] = useState(props.players);
  const [playerInTurn, setPlayerInTurn] = useState(playerArray[1]);

  return <View style={styles.container}>{playerInTurn}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
