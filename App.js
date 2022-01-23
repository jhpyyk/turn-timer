import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { View } from "react-native";
import AddPlayersScreen from "./AddPlayersScreen.js";
import TimerScreen from "./TimerScreen.js";

export default function App() {
  const [screen, setScreen] = useState(null);

  const addPlayersDoneHandle = (info) => {
    setScreen(<TimerScreen playerInfo={info} />);
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
