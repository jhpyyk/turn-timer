import React from "react";
import { Pressable, View, Text } from "react-native";
import PropTypes from "prop-types";
import TimeDisplay from "../TimeDisplay/TimeDisplay";
import styles from "./PlayerDisplayStyles";

// Adding number 22 adjusts alpha channel of the color i.e. makes the background color semi-transparent
export default function PlayerDisplay(props) {
  return (
    <View style={{ opacity: props.buttonOpacity }}>
      <Pressable
        style={[
          styles.buttonStyle,
          { borderColor: props.color, backgroundColor: props.color + "22" },
        ]}
        onPress={() => props.changePlayerIndex(props.id)}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          {props.name.length == 0 ? "" : props.name + ":   "}
        </Text>
        <TimeDisplay timeToDisplay={props.timeToDisplay} fontSize={18} />
      </Pressable>
    </View>
  );
}

PlayerDisplay.propTypes = {
  buttonOpacity: PropTypes.number,
  changePlayerIndex: PropTypes.func,
  color: PropTypes.string,
  timeToDisplay: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.number,
};
