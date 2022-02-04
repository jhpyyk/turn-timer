import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AddPlayersForm from "./src/screens/AddPlayersForm/AddPlayersForm.js";
import TimerScreen from "./src/screens/TimerScreen/TimerScreen.js";
import styles from "./AppStyles.js";

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
