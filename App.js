import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import AddPlayersForm from "./AddPlayersForm.js";
import TimerScreen from "./TimerScreen.js";

export default function App() {
  const [screen, setScreen] = useState(null);

  const addPlayersDoneHandle = (info) => {
    if (info.length > 0) {
      setScreen(<TimerScreen playerInfo={info} />);
    }
  };

  useEffect(() => {
    setScreen(<AddPlayersForm addPlayersDoneHandle={addPlayersDoneHandle} />);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1C2833",
    alignItems: "center",
    justifyContent: "center",
  },
});
