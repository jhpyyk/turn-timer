import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";

export default function AddPlayersScreen() {
  const [name, setName] = useState(null);
  const [color, setColor] = useState(null);
  const [playerArray, setPlayerArray] = useState([]);
  const nameField = useRef();
  const colorField = useRef();

  const addPlayer = () => {
    setPlayerArray([...playerArray, { name: name, color: color }]);
    nameField.current.clear();
    colorField.current.clear();
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={nameField}
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
      />
      <TextInput
        ref={colorField}
        style={styles.input}
        placeholder="Color"
        onChangeText={setColor}
      />
      <Pressable onPress={addPlayer} style={styles.buttonStyle}>
        <Text style={{ color: "white" }}>{"Add Player"}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C2833",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "white",
  },
  buttonStyle: {
    width: 100,
    height: 40,
    margin: 20,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkcyan",
    borderWidth: 1,
    borderColor: "white",
  },
});
