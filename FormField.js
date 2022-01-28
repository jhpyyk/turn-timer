import React from "react";
import { StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";

export default function FormField(props) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor="grey"
      maxLength="20"
    />
  );
}

FormField.propTypes = { style: PropTypes.object };

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 10,
    padding: 10,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
  },
});
