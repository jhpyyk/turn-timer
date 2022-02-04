import React from "react";
import { Pressable } from "react-native";
import PropTypes from "prop-types";
import styles from "./EndTurnButtonStyles";

// Adding number 22 adjusts alpha channel of the color i.e. makes the background color semi-transparent
export default function EndTurnButton(props) {
  return (
    <Pressable
      {...props}
      style={[
        styles.buttonStyle,
        { borderColor: props.color, backgroundColor: props.color + "22" },
      ]}
      android_ripple={{
        foreground: true,
        color: props.color,
        radius: 150,
      }}
    >
      {props.children}
    </Pressable>
  );
}

EndTurnButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.array,
};
