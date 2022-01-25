import React, { useRef, useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";

export default function AddPlayersScreen(props) {
  const [minutes, setMinutes] = useState(null);
  const [minutesColor, setMinutesColor] = useState("white");
  const [seconds, setSeconds] = useState("0");
  const [secondsColor, setSecondsColor] = useState("white");
  const [name, setName] = useState(null);
  const [color, setColor] = useState(null);
  const [playerInfo, setPlayerInfo] = useState([]);
  const [infoText, setInfoText] = useState(" ");
  const [infoTextColor, setInfoTextColor] = useState(" ");
  const minutesField = useRef();
  const secondsField = useRef();
  const nameField = useRef();
  const colorField = useRef();

  const addPlayerHandle = () => {
    if (!fieldNullCheck()) {
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
      setName(null);
      setColor(null);
      setInfoTextColor("white");
      setInfoText("Player Added");
    }
  };

  const handleMinutesChange = (input) => {
    if (validateNumber(input)) {
      setInfoText(" ");
      setMinutes(input);
      setMinutesColor("white");
    } else {
      setMinutesColor("red");
    }
  };

  const handleSecondsChange = (input) => {
    if (validateNumber(input)) {
      setInfoText(" ");
      setSeconds(input);
      setSecondsColor("white");
    } else {
      setSecondsColor("red");
    }
  };

  const validateNumber = (number) => {
    if (number == null || !number.match(/^[0-9]+$/)) {
      return false;
    }
    return true;
  };

  const fieldNullCheck = () => {
    if (minutes == null || minutes.length == 0) {
      return false;
    } else if (name == null || name.length == 0) {
      return false;
    } else if (color == null || color.length == 0) {
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
        onChangeText={(input) => handleMinutesChange(input)}
      />
      <TextInput
        ref={secondsField}
        style={[styles.input, { color: secondsColor }]}
        placeholder="Seconds"
        onChangeText={(input) => handleSecondsChange(input)}
      />
      <TextInput
        ref={nameField}
        style={styles.input}
        placeholder="Name"
        onChangeText={(input) => setName(input)}
      />
      <TextInput
        ref={colorField}
        style={styles.input}
        placeholder="Color"
        onChangeText={(input) => setColor(input)}
      />
      <Pressable onPress={addPlayerHandle} style={styles.buttonStyle}>
        <Text style={{ color: "white" }}>{"Add Player"}</Text>
      </Pressable>
      <Pressable
        onPress={() => props.addPlayersDoneHandle(playerInfo)}
        style={styles.buttonStyle}
      >
        <Text style={{ color: "white" }}>{"Done"}</Text>
      </Pressable>
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
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    color: "white",
    borderColor: "white",
  },
  buttonStyle: {
    width: 100,
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
