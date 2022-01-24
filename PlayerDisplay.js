import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function PlayerDisplay(props) {
  return (
    <View style={{ opacity: buttonOpacity }}>
      <Pressable
        style={[styles.buttonStyle, { backgroundColor: props.color }]}
        onPressIn={handlePressIn}
        disabled={buttonDisabled}
      >
        <Text>{"Pause"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 100,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
  },
});
