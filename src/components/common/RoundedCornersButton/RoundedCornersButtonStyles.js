import { StyleSheet } from "react-native";

const styles = (style) =>
  StyleSheet.create({
    buttonStyle: {
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      borderRadius: style.height / 3,
      borderWidth: style.height / 15,
    },
  });

export default styles;
