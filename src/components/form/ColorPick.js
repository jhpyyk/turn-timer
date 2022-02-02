import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

export default function ColorPick(props) {
  const [selected, setSelected] = useState(null);
  const colors = [
    "#FF5722",
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#795548",
    "#607D8B",
    "#EEEEEE",
    "#111111",
  ];

  const cubePressHandle = (index) => {
    props.colorCubePressed(colors[index]);
    setSelected(index);
  };

  const colorCubes = colors.map((cubeColor, index) => (
    <Pressable
      key={index}
      style={[
        styles.colorCube,
        { backgroundColor: cubeColor },
        index == selected ? { borderColor: "white", borderWidth: 2 } : {},
      ]}
      onPress={() => cubePressHandle(index)}
    />
  ));
  return <View style={styles.container}>{colorCubes}</View>;
}

ColorPick.propTypes = { colorCubePressed: PropTypes.func };

const styles = StyleSheet.create({
  container: {
    width: 300,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: 10,
  },
  colorCube: {
    width: 40,
    height: 40,
    borderRadius: 3,
    margin: 5,
    padding: 5,
  },
});
