import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AddPlayersForm from "./AddPlayersForm.js";
import TimerScreen from "./TimerScreen.js";

export default function App() {
  const [screen, setScreen] = useState(null);

  const testInfo = [
    { name: "blue", color: "blue", timeLeft: 5000 },
    { name: "violet", color: "violet", timeLeft: 5000 },
    { name: "yellow", color: "yellow", timeLeft: 5000 },
  ];

  const addPlayersDoneHandle = (info) => {
    if (info.length > 0) {
      setScreen(<TimerScreen playerInfo={info} />);
    }
  };

  useEffect(() => {
    setScreen(<AddPlayersForm addPlayersDoneHandle={addPlayersDoneHandle} />);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      {screen}
    </View>
  );
}
