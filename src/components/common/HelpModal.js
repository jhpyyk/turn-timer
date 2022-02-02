import React from "react";
import { View, Modal, StyleSheet, Pressable } from "react-native";
import PropTypes from "prop-types";

export default function HelpModal(props) {
  return (
    <Modal animationType={"fade"} transparent={true} {...props}>
      <Pressable onPress={() => props.closeHelp(false)} style={styles.modal}>
        <View style={styles.box}>{props.children}</View>
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
    backgroundColor: "#2D3944",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
  },
});

HelpModal.propTypes = { closeHelp: PropTypes.func, children: PropTypes.object };
