import type { Node } from "react";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { RgbBackground } from "./src/02_Style/RgbBackground";


const App: () => Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.block}>
          <RgbBackground />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default App;
