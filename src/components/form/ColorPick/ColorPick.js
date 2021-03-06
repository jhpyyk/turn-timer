import React, { useState } from "react";
import { Pressable, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./ColorPickStyles";

export default function ColorPick(props) {
  const [selected, setSelected] = useState(null);
  const colors = [
    "#FF1222",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2150FF",
    "#03A9F4",
    "#00DCD4",
    "#20AA50",
    "#0CCF00",
    "#FFEB3B",
    "#FFB977",
    "#FF7799",
    "#FF7700",
    "#674432",
    "#000000",
    "#607D8B",
    "#FFFFFF",
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
