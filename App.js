import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AddPlayersForm from "./src/screens/AddPlayersForm/AddPlayersForm.js";
import TimerScreen from "./src/screens/TimerScreen/TimerScreen.js";
import styles from "./AppStyles.js";

export default function App() {
  const [screen, setScreen] = useState(null);
  const [navBarVisibility, setNavBarVisibility] = useState("visible");

  const addPlayersDoneHandle = (info) => {
    if (info.length > 0) {
      setScreen(<TimerScreen playerInfo={info} />);
    }
  };

  useEffect(() => {
    if (navBarVisibility === "visible") {
      const interval = setTimeout(() => {
        NavigationBar.setVisibilityAsync("hidden");
      }, /* 3 Seconds */ 3000);

      return () => {
        clearTimeout(interval);
      };
    }
  }, [navBarVisibility]);

  useEffect(() => {
    NavigationBar.addVisibilityListener(({ visibility }) => {
      setNavBarVisibility(visibility);
    });
    NavigationBar.setPositionAsync("absolute");
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("inset-swipe");
    NavigationBar.setBackgroundColorAsync("#00000080");
    setScreen(<AddPlayersForm addPlayersDoneHandle={addPlayersDoneHandle} />);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {screen}
    </View>
  );
}
