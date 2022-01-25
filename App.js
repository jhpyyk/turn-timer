import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View } from "react-native";
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
    setScreen(<TimerScreen playerInfo={testInfo} />);
  };

  useEffect(() => {
    setScreen(
      <AddPlayersScreen
        duration={9 * 60 * 1000}
        addPlayersDoneHandle={addPlayersDoneHandle}
      />
    );
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {screen}
    </View>
  );
}
//<TimerScreen duration={9 * 60 * 1000} playerArray={players} />
