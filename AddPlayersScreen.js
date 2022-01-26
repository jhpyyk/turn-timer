import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";
import FormButton from "./FormButton";
import RoundedEdgeButton from "./RoundedEdgeButton";

export default function AddPlayersScreen(props) {
  const [minutes, setMinutes] = useState("");
  const [minutesColor, setMinutesColor] = useState("white");
  const [seconds, setSeconds] = useState("");
  const [secondsColor, setSecondsColor] = useState("white");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [playerInfo, setPlayerInfo] = useState([]);
  const [infoText, setInfoText] = useState(" ");
  const [infoTextColor, setInfoTextColor] = useState("white");
  const minutesField = useRef();
  const secondsField = useRef();
  const nameField = useRef();
  const colorField = useRef();

  const addPlayerHandle = () => {
    if (!fieldCheck()) {
      setInfoTextColor("red");
      setInfoText("Required field is empty");
    } else if (!validateNumber(minutes) || !validateNumber(seconds)) {
      setInfoTextColor("red");
      setInfoText("Only numbers allowed");
    } else {
      setPlayerInfo([
        ...playerInfo,
        {
          name: name,
          color: color,
          timeLeft: minutes * 60000 + seconds * 1000,
        },
      ]);
      nameField.current.clear();
      colorField.current.clear();
      setName("");
      setColor("");
      setInfoTextColor("white");
      setInfoText("Player Added");
    }
  };

  useEffect(() => {
    setMinutesColor(validateNumber(minutes) ? "white" : "red");
  }, [minutes]);

  useEffect(() => {
    setSecondsColor(validateNumber(seconds) ? "white" : "red");
  }, [seconds]);

  const validateNumber = (number) => {
    if (number.length == 0 || number.match(/^[0-9]+$/)) {
      return true;
    }
    return false;
  };

  const fieldCheck = () => {
    if (seconds.length == 0 && minutes.length == 0) {
      return false;
    } else if (name.length == 0) {
      return false;
    } else if (color.length == 0) {
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={minutesField}
        style={[styles.input, { color: minutesColor }]}
        placeholder="Minutes"
        placeholderTextColor="grey"
        keyboardType="number-pad"
        maxLength={6}
        onChangeText={(input) => setMinutes(input)}
        value={minutes}
      />
      <TextInput
        ref={secondsField}
        style={[styles.input, { color: secondsColor }]}
        placeholder="Seconds"
        placeholderTextColor="grey"
        keyboardType="number-pad"
        maxLength={15}
        onChangeText={(input) => setSeconds(input)}
        value={seconds}
      />
      <TextInput
        ref={nameField}
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="grey"
        maxLength={15}
        onChangeText={(input) => setName(input)}
        value={name}
      />
      <TextInput
        ref={colorField}
        style={styles.input}
        placeholder="Color"
        placeholderTextColor="grey"
        maxLength={15}
        onChangeText={(input) => setColor(input)}
        value={color}
      />
      <FormButton buttonText={"Add player"} onPress={addPlayerHandle} />
      <FormButton
        buttonText={"Done"}
        onPress={() => props.addPlayersDoneHandle(playerInfo)}
      />
      <Text style={{ color: infoTextColor }}>{infoText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C2833",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    color: "white",
    borderColor: "white",
  },
  buttonStyle: {
    width: 200,
    height: 40,
    margin: 5,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkcyan",
    borderWidth: 2,
    borderColor: "white",
  },
});
