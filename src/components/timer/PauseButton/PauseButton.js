import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import RoundedEdgeButton from "../../common/RoundedCornersButton/RoundedCornersButton";
import styles from "./PauseButtonStyles";

export default function PauseButton(props) {
  return (
    <RoundedEdgeButton
      {...props}
      style={[
        styles.buttonStyle,
        { borderColor: props.color, backgroundColor: props.color + "22" },
        props.style,
      ]}
    >
      <Text style={{ color: "white" }}>{"Pause"}</Text>
    </RoundedEdgeButton>
  );
}

PauseButton.propTypes = { color: PropTypes.string, style: PropTypes.object };
