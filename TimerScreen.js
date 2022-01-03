import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Player from "./Player.js";

export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <Player duration={10 * 60 * 1000} />
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
