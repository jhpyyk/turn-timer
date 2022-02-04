import React from "react";
import { Pressable, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./HelpButtonStyles";

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

HelpButton.propTypes = { textColor: PropTypes.string, style: PropTypes.object };
