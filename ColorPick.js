import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function ColorPick() {
  const colors = [
    "#607D8B",
    "#9E9E9E",
    "#795548",
    "#FF5722",
    "#FF9800",
    "#FFC107",
    "#FFEB3B",
    "#CDDC39",
    "#4CAF50",
    "#009688",
    "#00BCD4",
    "#03A9F4",
    "#2196F3",
    "#3F51B5",
    "#673AB7",
    "#9C27B0",
    "#E91E63",
    "#F44336",
  ];
  const colorCubes = colors.map((cubeColor, index) => (
    <Pressable
      key={index}
      style={[styles.colorCube, { backgroundColor: cubeColor }]}
    />
  ));
  return <View style={styles.container}>{colorCubes}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 10,
  },
  colorCube: {
    width: 22,
    height: 22,
    borderRadius: 3,
    margin: 5,
  },
});
