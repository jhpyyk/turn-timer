import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function WhiteText(props) {
  return (
    <Text style={[{ color: "white", lineHeight: 22 }, props.style]}>
      {props.children}
    </Text>
  );
}

WhiteText.propTypes = { children: PropTypes.string, style: PropTypes.object };
