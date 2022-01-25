import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import TimeDisplay from "./TimeDisplay";

export default function PlayerDisplay(props) {
  const handlePress = () => {};

  return (
    <View style={{ opacity: props.buttonOpacity }}>
      <Pressable
        style={[styles.buttonStyle, { borderColor: props.color }]}
        onPress={handlePress}
      >
        <Text style={{ color: "white", fontSize: 18 }}>
          {props.name + ":   "}
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
