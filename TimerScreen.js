import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function TimerScreen(props) {
  const [playerInTurn, setPlayerInTurn] = useState(0);

  const nextPlayer = () => {
    setPlayerInTurn(playerInTurn + 1);
    if (playerInTurn > playerArray.length - 1) {
      setPlayerInTurn(0);
    }
  };

  return <View style={styles.container}>{props.players[playerInTurn]}</View>;
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
