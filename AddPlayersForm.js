import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import FormButton from "./FormButton";
import FormField from "./FormField";
import PropTypes from "prop-types";
import useNumberValidation from "./UseNumberValidation";
import useColorValidation from "./UseColorValidation";
import ColorPick from "./ColorPick";
import FormHelp from "./FormHelp";

export default function AddPlayersForm(props) {
  const [playerInfo, setPlayerInfo] = useState([]);
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerColor, setPlayerColor] = useState("");
  const [isFieldsValid, setIsFieldsValid] = useState(false);
  const [isMinutesValid, isMinutesEmpty] = useNumberValidation(minutes);
  const [isSecondsValid, isSecondsEmpty] = useNumberValidation(seconds);
  const [isPlayerColorValid, isPlayerColorEmpty] =
    useColorValidation(playerColor);
  const [isHelpVisible, setIsHelpVisible] = useState(true);

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

  const colorCubePressed = (color) => {
    setPlayerColor(color);
  };

  useEffect(() => {
    setIsFieldsValid(
      ((isMinutesValid && isSecondsValid) ||
        (isMinutesValid && isSecondsEmpty) ||
        (isSecondsValid && isMinutesEmpty)) &&
        isPlayerColorValid &&
        !isPlayerColorEmpty
    );
  }, [
    isMinutesEmpty,
    isSecondsEmpty,
    isPlayerColorEmpty,
    isMinutesValid,
    isSecondsValid,
    isPlayerColorValid,
  ]);

  return (
    <View>
      <FormHelp visible={isHelpVisible} />
      <FormField
        placeholder={"Minutes"}
        value={minutes}
        onChangeText={(input) => {
          setMinutes(input);
        }}
        style={{
          color: isMinutesValid || isMinutesEmpty ? "white" : "red",
        }}
        keyboardType={"numeric"}
      />
      <FormField
        placeholder={"Seconds"}
        value={seconds}
        onChangeText={(input) => {
          setSeconds(input);
        }}
        style={{
          color: isSecondsValid || isSecondsEmpty ? "white" : "red",
        }}
        keyboardType={"numeric"}
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
          color: isPlayerColorValid || isPlayerColorEmpty ? "white" : "red",
        }}
      />
      <ColorPick colorCubePressed={colorCubePressed} />
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

AddPlayersForm.propTypes = { addPlayersDoneHandle: PropTypes.func };
