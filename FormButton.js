import React from "react";
import { StyleSheet } from "react-native";
import RoundedEdgeButton from "./RoundedEdgeButton";
import PropTypes from "prop-types";

export default function FormButton(props) {
  return (
    <RoundedEdgeButton {...props} style={[styles.buttonStyle, props.style]}>
      {props.children}
    </RoundedEdgeButton>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    height: 40,
    backgroundColor: "darkcyan",
    borderColor: "white",
    margin: 10,
  },
});

FormButton.propTypes = { style: PropTypes.object, children: PropTypes.object };
