import React from "react";
import { Pressable, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function EndTurnButton(props) {
  return (
    <Pressable
      {...props}
      style={[styles.buttonStyle, { borderColor: props.color }]}
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

const styles = StyleSheet.create({
  buttonStyle: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 150,
    borderWidth: 6,
  },
});

EndTurnButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.array,
};
