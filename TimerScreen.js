import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Timer from "./Timer";

export default function TimerScreen(props) {
  const [playerInTurn, setPlayerInTurn] = useState(0);

  const nextPlayer = () => {
    setPlayerInTurn(playerInTurn + 1);
    if (playerInTurn > props.playerArray.length - 1) {
      setPlayerInTurn(0);
    }
  };

  const createPlayerTimers = () => {};

  return (
    <View style={styles.container}>
      <Timer
        duration={props.duration}
        playerColor={props.playerArray[0].playerColor}
        nextPlayer={nextPlayer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C2833",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
