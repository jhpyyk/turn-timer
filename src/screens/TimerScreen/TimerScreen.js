import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import PropTypes from "prop-types";
import EndTurnButton from "../../components/timer/EndTurnButton/EndTurnButton";
import PauseButton from "../../components/timer/PauseButton/PauseButton";
import PlayerList from "../../components/timer/PlayerList/PlayerList";
import TimerHelpText from "../../components/timer/TimerHelpText/TimerHelpText";
import TimeDisplay from "../../components/timer/TimeDisplay/TimeDisplay";
import HelpButton from "../../components/common/HelpButton/HelpButton";
import HelpModal from "../../components/common/HelpModal/HelpModal";
import useTimer from "../../hooks/UseTimer";
import styles from "./TimerScreenStyles";

export default function TimerScreen(props) {
  const [playerArray, setPlayerArray] = useState([...props.playerInfo]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [playerTime, timerStart, timerStop, isTimerRunning, getTime] = useTimer(
    playerArray[playerIndex].timeLeft,
    playerIndex,
    savePlayerTime
  );
  const [isHelpVisible, setIsHelpVisible] = useState(false);

  const endTurn = () => {
    savePlayerTime();
    if (playerIndex + 1 >= playerArray.length) {
      setPlayerIndex(0);
    } else {
      setPlayerIndex(playerIndex + 1);
    }
  };

  const changePlayerIndex = (index) => {
    if (playerIndex != index) {
      if (isTimerRunning) {
        savePlayerTime();
      }
      timerStop();
      setPlayerIndex(index);
    }
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
      <HelpModal
        closeHelp={setIsHelpVisible}
        onRequestClose={() => setIsHelpVisible(false)}
        visible={isHelpVisible}
      >
        <TimerHelpText />
      </HelpModal>
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
        <HelpButton
          style={{
            borderColor: playerArray[playerIndex].color,
            backgroundColor: playerArray[playerIndex].color + "22",
          }}
          textColor={playerArray[playerIndex].color}
          onPress={() => setIsHelpVisible()}
        />
      </ScrollView>
    </View>
  );
}

TimerScreen.propTypes = { playerInfo: PropTypes.array };
