import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import AddPlayersScreen from "./AddPlayersScreen.js";
import Player from "./Player.js";
import TimerScreen from "./TimerScreen.js";

export default function App() {
  const player1 = { playerName: "1", playerColor: "green" };
  const player2 = { playerName: "2", playerColor: "red" };
  const players = [player1, player2];

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AddPlayersScreen />
    </View>
  );
}
//<TimerScreen duration={9 * 60 * 1000} playerArray={players} />
