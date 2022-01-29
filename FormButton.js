import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import RoundedEdgeButton from "./RoundedEdgeButton";

export default function FormButton(props) {
  return (
    <RoundedEdgeButton {...props} style={[styles.buttonStyle, props.style]}>
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
