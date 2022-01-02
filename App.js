import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./Timer.js";
import EndTurnButton from "./EndTurnButton.js";
import Player from "./Player.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Player duration={10 * 60 * 1000} />
      <Timer duration={10 * 60 * 1000} />
      <Timer duration={10 * 60 * 1000} />
      <StatusBar style="auto" />
    </View>
  );
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
