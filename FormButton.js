import React, { useRef, useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import RoundedEdgeButton from "./RoundedEdgeButton";

export default function FormButton(props) {
  return (
    <RoundedEdgeButton style={styles.buttonStyle} {...props}>
      {props.children}
    </RoundedEdgeButton>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 200,
    height: 40,
    backgroundColor: "darkcyan",
    borderColor: "white",
    margin: 10,
  },
});
