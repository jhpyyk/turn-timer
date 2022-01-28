import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import PropTypes from "prop-types";

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

const styles = (style) =>
  StyleSheet.create({
    buttonStyle: {
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      borderRadius: style.height / 3,
      borderWidth: style.height / 15,
    },
  });

RoundedEdgeButton.propTypes = {
  style: PropTypes.number,
  children: PropTypes.object,
};
