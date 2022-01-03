import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";

export default function AddPlayersScreen() {
  const { register, handleSubmit } = useForm();
  const [playerArray, setPlayerArray] = useState([]);

  const addPlayer = (data) => {
    setPlayerArray([...playerArray, data]);
  };

  useEffect(() => console.log(playerArray));

  return (
    <View style={styles.container}>
      <form onSubmit={handleSubmit(addPlayer)}>
        <input {...register("Name")} />
        <input {...register("Color")} />
        <input type="submit" />
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
