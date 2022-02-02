import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function TimeDisplay(props) {
  const [uiTime, setUiTime] = useState(0);

  const formatTime = (milliseconds) => {
    if (milliseconds > 0) {
      let minutes = Math.floor(milliseconds / 1000 / 60);
      let seconds = Math.floor((milliseconds / 1000) % 60);
      let formattedTime =
        minutes.toString().padStart(2, "0") +
        ":" +
        seconds.toString().padStart(2, "0");
      return formattedTime;
    } else {
      return "00:00";
    }
  };

  useEffect(() => {
    setUiTime(formatTime(props.timeToDisplay));
  }, [props.timeToDisplay]);

  return (
    <Text style={{ color: "white", fontSize: props.fontSize }}>{uiTime}</Text>
  );
}

TimeDisplay.propTypes = {
  timeToDisplay: PropTypes.number,
  fontSize: PropTypes.number,
};
