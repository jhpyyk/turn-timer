import React, { useState, useEffect } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function RoundedEdgeButton(props) {
  const styles = StyleSheet.create({
    buttonStyle: {
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      width: props.styling.width,
      height: props.styling.height,
      borderRadius: props.styling.height / 3,
      borderWidth: props.styling.height / 20,
      borderColor: props.styling.borderColor,
      backgroundColor: props.styling.bgColor,
    },
  });
  return (
    <View style={{ opacity: props.styling.opacity }}>
      <Pressable onPress={props.onPress} style={styles.buttonStyle}>
        {props.children}
      </Pressable>
    </View>
  );
}
