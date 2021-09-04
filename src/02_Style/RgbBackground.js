import type { Node } from "react";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";


export const RgbBackground: () => Node = () => {
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  const valueG = (e) => setG(e.currentTarget.value);
  const valueB = (e) => setB(e.currentTarget.value);

  return (
    <View style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, height: 200 }}>
      <TextInput style={styles.input} value={r} onChangeText={(e) => setR(e)} />
      <TextInput style={styles.input} value={g} keyboardType={"numeric"} onChangeText={(val) => setG(Number(val))} />
      <TextInput style={styles.input} value={b} keyboardType={"numeric"} onChangeText={(val) => setB(Number(val))} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    alignSelf: "flex-start",
    borderWidth: 2,
    borderStyle: "solid",
    paddingHorizontal: 30,

  },
});
