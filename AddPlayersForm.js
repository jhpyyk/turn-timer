import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import FormButton from "./FormButton";
import FormField from "./FormField";
import PropTypes from "prop-types";
import useNumberValidation from "./UseNumberValidation";
import useColorValidation from "./UseColorValidation";

export default function AddPlayersScreen(props) {
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerColor, setPlayerColor] = useState("");
  const [playerInfo, setPlayerInfo] = useState([]);
  const [isFieldsValid, setIsFieldsValid] = useState(false);
  const [infoText, setInfoText] = useState(" ");
  const isMinutesFieldValid = useNumberValidation(minutes);
  const isSecondsFieldValid = useNumberValidation(seconds);
  const isColorFieldValid = useColorValidation(playerColor);

  const addPlayerHandle = () => {
    setPlayerInfo([
      ...playerInfo,
      {
        name: playerName,
        color: playerColor,
        timeLeft: minutes * 60000 + seconds * 1000,
      },
    ]);
    setInfoText("Player added");
    setPlayerName("");
    setPlayerColor("");
  };

  useEffect(() => {
    setIsFieldsValid(
      isMinutesFieldValid && isSecondsFieldValid && isColorFieldValid
    );
  }, [isMinutesFieldValid, isSecondsFieldValid, isColorFieldValid]);

  useEffect(() => {
    if (!isMinutesFieldValid || !isSecondsFieldValid) {
      setInfoText("Only numbers allowed");
    } else {
      setInfoText(" ");
    }
  }, [isMinutesFieldValid, isSecondsFieldValid]);

  return (
    <View style={styles.container}>
      <FormField
        placeholder={"Minutes"}
        value={minutes}
        onChangeText={(input) => {
          setMinutes(input);
        }}
        style={{
          color: isMinutesFieldValid ? "white" : "red",
        }}
      />
      <FormField
        placeholder={"Seconds"}
        value={seconds}
        onChangeText={(input) => {
          setSeconds(input);
        }}
        style={{
          color: isSecondsFieldValid ? "white" : "red",
        }}
      />
      <FormField
        placeholder={"Name"}
        value={playerName}
        onChangeText={(input) => {
          setPlayerName(input);
        }}
      />
      <FormField
        placeholder={"Color"}
        value={playerColor}
        onChangeText={(input) => {
          setPlayerColor(input);
        }}
        style={{ color: isColorFieldValid ? "white" : "red" }}
      />
      <FormButton onPress={addPlayerHandle} disabled={!isFieldsValid}>
        <Text style={{ color: "white" }}>{"Add player"}</Text>
      </FormButton>
      <FormButton onPress={() => props.addPlayersDoneHandle(playerInfo)}>
        <Text style={{ color: "white" }}>{"Done"}</Text>
      </FormButton>
      <Text
        style={{
          color: isMinutesFieldValid && isSecondsFieldValid ? "white" : "red",
        }}
      >
        {infoText}
      </Text>
    </View>
  );
}

AddPlayersScreen.propTypes = { addPlayersDoneHandle: PropTypes.func };

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1C2833",
    alignItems: "center",
    justifyContent: "center",
  },
});
