import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import PlayerDisplay from "./PlayerDisplay";

export default function PlayerList(props) {
  const listItems = props.playerArray.map((player, index) => (
    <PlayerDisplay
      key={index}
      timeToDisplay={
        index == props.playerIndex ? props.timeToDisplay : player.timeLeft
      }
      name={player.name}
      color={player.color}
    />
  ));

  return listItems;
}
