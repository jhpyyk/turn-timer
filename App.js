import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View, TextInput, Platform, PlatformColor } from "react-native";
import AddPlayersScreen from "./AddPlayersScreen.js";
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
      setScreen(<TimerScreen playerInfo={testInfo} />);
    }
  };

  useEffect(() => {
    setScreen(<AddPlayersScreen addPlayersDoneHandle={addPlayersDoneHandle} />);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      {screen}
    </View>
  );
}
