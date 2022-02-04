import React from "react";
import { TextInput } from "react-native";
import PropTypes from "prop-types";
import styles from "./FormFieldStyles";

// Uses forwardRef so that .focus() method can be used in AddPlayersForm
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
