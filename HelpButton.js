import React from "react";
import { Pressable, StyleSheet } from "react-native";
import WhiteText from "./WhiteText";

export default function HelpButton(props) {
  return (
    <Pressable style={styles.buttonStyle} {...props}>
      <WhiteText style={{ fontSize: 20, fontWeight: "bold" }}>{"?"}</WhiteText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "darkcyan",
    position: "absolute",
    right: 9,
    top: 0,
  },
});
