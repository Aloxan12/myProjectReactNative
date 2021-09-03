import type { Node } from "react";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Counter } from "./src/01_Counter/Counter";



const App: () => Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.block}>
          <Counter />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default App;
