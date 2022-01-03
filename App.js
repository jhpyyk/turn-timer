import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AddPlayersScreen from "./AddPlayersScreen.js";
import Player from "./Player.js";
import TimerScreen from "./TimerScreen.js";

export default function App() {
  const player1 = <Player duration={1 * 60 * 1000} playerColor={"orange"} />;
  const player2 = <Player duration={2 * 60 * 1000} playerColor={"green"} />;
  const player3 = <Player duration={3 * 60 * 1000} playerColor={"red"} />;
  const players = [player1, player2, player3];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AddPlayersScreen />
    </View>
  );
}
