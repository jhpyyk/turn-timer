import React from "react";
import { View, Modal, StyleSheet, Pressable } from "react-native";
import FormInfoText from "./FormInfoText.js";
import PropTypes from "prop-types";

export default function FormHelp(props) {
  return (
    <Modal transparent={true} {...props}>
      <Pressable onPress={() => props.closeHelp(false)} style={styles.modal}>
        <View style={styles.box}>
          <FormInfoText />
        </View>
      </Pressable>
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

FormHelp.propTypes = { closeHelp: PropTypes.func };
