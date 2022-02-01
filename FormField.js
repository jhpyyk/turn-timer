import React from "react";
import { StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";

const FormField = (props, ref) => {
  return (
    <TextInput
      returnKeyType={"next"}
      blurOnSubmit={false}
      {...props}
      ref={ref}
      style={[styles.input, props.style]}
      placeholderTextColor={"grey"}
      maxLength={20}
    />
  );
};

export default React.forwardRef(FormField);

FormField.propTypes = { style: PropTypes.object };

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    margin: 10,
    padding: 10,
    color: "white",
    borderWidth: 1,
    borderColor: "white",
  },
});
