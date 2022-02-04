import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import PropTypes from "prop-types";
import styles from "./RoundedCornersButtonStyles";

export default function RoundedEdgeButton(props) {
  return (
    <View style={{ opacity: props.style.opacity }}>
      <Pressable
        {...props}
        style={[
          styles(StyleSheet.flatten(props.style)).buttonStyle,
          props.style,
        ]}
      >
        {props.children}
      </Pressable>
    </View>
  );
}

RoundedEdgeButton.propTypes = {
  style: PropTypes.any,
  children: PropTypes.any,
};
