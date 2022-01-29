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
  const [isRequiredFieldEmpty, setIsRequiredFieldEmpty] = useState(true);
  const isMinutesValid = useNumberValidation(minutes);
  const isSecondsValid = useNumberValidation(seconds);
  const isPlayerColorValid = useColorValidation(playerColor);

  const addPlayerHandle = () => {
    setPlayerInfo([
      ...playerInfo,
      {
        name: playerName,
        color: playerColor,
        timeLeft: minutes * 60000 + seconds * 1000,
      },
    ]);
    setPlayerName("");
    setPlayerColor("");
  };

  useEffect(() => {
    setIsRequiredFieldEmpty(
      (minutes.length == 0 && seconds.length == 0) || playerColor.length == 0
    );
  }, [minutes, seconds, playerColor]);

  useEffect(() => {
    setIsFieldsValid(
      (isMinutesValid || isSecondsValid) &&
        isPlayerColorValid &&
        !isRequiredFieldEmpty
    );
  }, [
    isMinutesValid,
    isPlayerColorValid,
    isRequiredFieldEmpty,
    isSecondsValid,
  ]);

  return (
    <View style={styles.container}>
      <FormField
        placeholder={"Minutes"}
        value={minutes}
        onChangeText={(input) => {
          setMinutes(input);
        }}
        style={{
          color: isMinutesValid || minutes.length == 0 ? "white" : "red",
        }}
      />
      <FormField
        placeholder={"Seconds"}
        value={seconds}
        onChangeText={(input) => {
          setSeconds(input);
        }}
        style={{
          color: isSecondsValid || seconds.length == 0 ? "white" : "red",
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
        style={{
          color:
            isPlayerColorValid || playerColor.length == 0 ? "white" : "red",
        }}
      />
      <FormButton
        onPress={addPlayerHandle}
        disabled={!isFieldsValid}
        style={{ opacity: isFieldsValid ? 1 : 0.2 }}
      >
        <Text style={{ color: "white" }}>{"Add player"}</Text>
      </FormButton>
      <FormButton
        onPress={() => props.addPlayersDoneHandle(playerInfo)}
        style={{ opacity: playerInfo.length > 0 ? 1 : 0.2 }}
      >
        <Text style={{ color: "white" }}>{"Done"}</Text>
      </FormButton>
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
