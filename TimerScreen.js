import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import EndTurnButton from "./EndTurnButton";
import PauseButton from "./PauseButton";
import PlayerList from "./PlayerList";
import PropTypes from "prop-types";
import useTimer from "./UseTimer";
import TimeDisplay from "./TimeDisplay";

export default function TimerScreen(props) {
  const [playerArray, setPlayerArray] = useState([...props.playerInfo]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [playerTime, timerStart, timerStop, isTimerRunning, getTime] = useTimer(
    playerArray[playerIndex].timeLeft,
    playerIndex,
    savePlayerTime
  );

  const endTurn = () => {
    savePlayerTime();
    if (playerIndex + 1 >= playerArray.length) {
      setPlayerIndex(0);
    } else {
      setPlayerIndex(playerIndex + 1);
    }
  };

  const changePlayerIndex = (index) => {
    timerStop();
    savePlayerTime();
    setPlayerIndex(index);
  };

  const savePlayerTime = () => {
    let time = getTime();
    if (time < 0) {
      time = 0;
    }
    let temp = [...playerArray];
    temp[playerIndex].timeLeft = time;
    setPlayerArray(temp);
  };

  return (
    <View style={{ alignSelf: "stretch" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <PlayerList
          playerArray={playerArray}
          timeToDisplay={playerTime}
          playerIndex={playerIndex}
          changePlayerIndex={changePlayerIndex}
        />
        <EndTurnButton
          timeToDisplay={playerTime}
          color={playerArray[playerIndex].color}
          onPress={isTimerRunning ? endTurn : timerStart}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            {isTimerRunning ? "End turn" : "Start"}
          </Text>
          <TimeDisplay timeToDisplay={playerTime} fontSize={40} />
        </EndTurnButton>
        <PauseButton
          onPress={timerStop}
          color={playerArray[playerIndex].color}
          style={{
            opacity: isTimerRunning ? 1 : 0.2,
          }}
          disabled={!isTimerRunning}
        />
      </ScrollView>
    </View>
  );
}

TimerScreen.propTypes = { playerInfo: PropTypes.array };

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 80,
  },
});
