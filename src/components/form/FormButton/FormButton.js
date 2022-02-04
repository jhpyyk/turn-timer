import React from "react";
import PropTypes from "prop-types";
import RoundedEdgeButton from "../../common/RoundedCornersButton/RoundedCornersButton";
import styles from "./FormButtonStyles";

export default function FormButton(props) {
  return (
    <RoundedEdgeButton {...props} style={[styles.buttonStyle, props.style]}>
      {props.children}
    </RoundedEdgeButton>
  );
}

FormButton.propTypes = { style: PropTypes.object, children: PropTypes.object };
