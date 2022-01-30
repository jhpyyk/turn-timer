import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";
import PropTypes from "prop-types";

export default function PlayerDisplay(props) {
  return (
    <View style={{ opacity: props.buttonOpacity }}>
      <Pressable
        style={[styles.buttonStyle, { borderColor: props.color }]}
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

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    borderWidth: 3,
  },
});

PlayerDisplay.propTypes = {
  buttonOpacity: PropTypes.number,
  changePlayerIndex: PropTypes.func,
  color: PropTypes.string,
  timeToDisplay: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.number,
};
