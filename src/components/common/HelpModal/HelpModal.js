import React from "react";
import { View, Modal, Pressable } from "react-native";
import PropTypes from "prop-types";
import styles from "./HelpModalStyles";

export default function HelpModal(props) {
  return (
    <Modal animationType={"fade"} transparent={true} {...props}>
      <Pressable onPress={() => props.closeHelp(false)} style={styles.modal}>
        <View style={styles.box}>{props.children}</View>
      </Pressable>
    </Modal>
  );
}

HelpModal.propTypes = { closeHelp: PropTypes.func, children: PropTypes.object };
