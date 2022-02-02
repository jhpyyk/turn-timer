import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import FormButton from "../components/form/FormButton";
import FormField from "../components/form/FormField";
import FormHelpText from "../components/form/FormHelpText";
import ColorPick from "../components/form/ColorPick";
import HelpModal from "../components/common/HelpModal";
import HelpButton from "../components/common/HelpButton";
import useNumberValidation from "../hooks/UseNumberValidation";
import useColorValidation from "../hooks/UseColorValidation";

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
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const secondsFieldRef = useRef();
  const playerNameFieldRef = useRef();

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
    playerNameFieldRef.current.focus();
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
      <HelpModal
        closeHelp={setIsHelpVisible}
        onRequestClose={() => setIsHelpVisible(false)}
        visible={isHelpVisible}
      >
        <FormHelpText />
      </HelpModal>
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
        onSubmitEditing={() => secondsFieldRef.current.focus()}
      />
      <FormField
        ref={secondsFieldRef}
        placeholder={"Seconds"}
        value={seconds}
        onChangeText={(input) => {
          setSeconds(input);
        }}
        style={{
          color: isSecondsValid || isSecondsEmpty ? "white" : "red",
        }}
        keyboardType={"numeric"}
        onSubmitEditing={() => playerNameFieldRef.current.focus()}
      />
      <FormField
        ref={playerNameFieldRef}
        placeholder={"Name"}
        value={playerName}
        onChangeText={(input) => {
          setPlayerName(input);
        }}
        returnKeyType={"done"}
        blurOnSubmit={true}
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
        returnKeyType={"done"}
        blurOnSubmit={true}
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
      <HelpButton
        style={{
          alignSelf: "center",
          borderColor: "white",
          backgroundColor: "darkcyan",
        }}
        textColor={"white"}
        onPress={() => setIsHelpVisible()}
      />
    </View>
  );
}

AddPlayersForm.propTypes = { addPlayersDoneHandle: PropTypes.func };
