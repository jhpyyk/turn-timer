import React from "react";
import { View } from "react-native";
import WhiteText from "./WhiteText";

export default function FormInfoText() {
  return (
    <View style={{ margin: 15 }}>
      <WhiteText style={{ fontWeight: "bold", fontSize: 16 }}>
        Minutes and seconds:
      </WhiteText>
      <WhiteText>
        Accepts only whole numbers. One of them is required.
      </WhiteText>
      <WhiteText> </WhiteText>
      <WhiteText style={{ fontWeight: "bold", fontSize: 16 }}>Name:</WhiteText>
      <WhiteText>Accepts anything.</WhiteText>
      <WhiteText> </WhiteText>
      <WhiteText style={{ fontWeight: "bold", fontSize: 16 }}>Color:</WhiteText>
      <WhiteText>
        Accepts HTML HEX color codes. For example #F44336. Required.
      </WhiteText>
    </View>
  );
}
