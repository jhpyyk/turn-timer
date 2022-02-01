import React from "react";
import { StyleSheet, Text } from "react-native";
import RoundedEdgeButton from "./RoundedEdgeButton";
import PropTypes from "prop-types";

export default function PauseButton(props) {
  return (
    <RoundedEdgeButton
      {...props}
      style={[
        styles.buttonStyle,
        { borderColor: props.color, backgroundColor: props.color + "22" },
      ]}
    >
      <Text style={{ color: "white" }}>{"Pause"}</Text>
    </RoundedEdgeButton>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 230,
    height: 40,
    margin: 10,
  },
});

PauseButton.propTypes = { color: PropTypes.string };
