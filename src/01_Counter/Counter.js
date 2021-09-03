import type { Node } from "react";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export const Counter: () => Node = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(prev => prev + 1);
  };
  const clearCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.btn}><Button title="inc" onPress={incCount} /></Text>
      <Text style={styles.btn}><Button title="clear" onPress={clearCount} /></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6e6969",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  count: {
    alignSelf: "center",
    fontSize: 26,
    margin: 20,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderStyle: "solid",
    borderColor: "black",
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#d3cbcb",
  },
  btn:{
    alignSelf: "center",
    color:'white',
    marginTop: 10,

  }
});
