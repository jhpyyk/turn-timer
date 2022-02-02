import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

export default function HelpButton(props) {
  return (
    <Pressable {...props} style={[styles.buttonStyle, props.style]}>
      <Text
        style={{ fontSize: 20, fontWeight: "bold", color: props.textColor }}
      >
        {"?"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 2,
    margin: 5,
  },
});

HelpButton.propTypes = { textColor: PropTypes.string, style: PropTypes.object };
