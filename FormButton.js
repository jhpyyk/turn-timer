import React, { useRef, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  TextPropTypes,
} from "react-native";
import RoundedEdgeButton from "./RoundedEdgeButton";

export default function FormButton(props) {
  return (
    <RoundedEdgeButton
      styling={{
        width: 200,
        height: 40,
        bgColor: "darkcyan",
        borderColor: "white",
      }}
      onPress={props.onPress}
    >
      <Text style={{ color: "white" }}>{props.buttonText}</Text>
    </RoundedEdgeButton>
  );
}
