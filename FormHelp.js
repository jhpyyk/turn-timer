import React, { useState } from "react";
import { View, Modal, StyleSheet } from "react-native";
import FormInfoText from "./FormInfoText.js";

export default function FormHelp(props) {
  return (
    <Modal transparent={true} {...props}>
      <View style={styles.modal}>
        <View style={styles.box}>
          <FormInfoText />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000080",
  },
  box: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1C2833",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
});
