import React from "react";
import { View } from "react-native";
import WhiteText from "../../common/WhiteText/WhiteText";

export default function TimerHelpText() {
  return (
    <View style={{ margin: 15 }}>
      <WhiteText>
        Press player name/time to switch player. This pauses the timer too.
      </WhiteText>
      <WhiteText> </WhiteText>
      <WhiteText> </WhiteText>
      <WhiteText> </WhiteText>
      <WhiteText style={{ fontWeight: "bold", fontSize: 16 }}>
        Created by:
      </WhiteText>
      <WhiteText>Juuso Pyykkönen</WhiteText>
      <WhiteText> </WhiteText>
      <WhiteText style={{ fontWeight: "bold", fontSize: 16 }}>
        GitHub Repository:
      </WhiteText>
      <WhiteText>github.com/jhpyyk/turn-timer</WhiteText>
    </View>
  );
}
