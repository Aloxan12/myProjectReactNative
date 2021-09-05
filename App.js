import type { Node } from "react";
import React from "react";
import { StyleSheet, View } from "react-native";
import { MainPage } from "./src/MainPage";


const App: () => Node = () => {
  return (
        <View style={styles.block}>
          <MainPage />
        </View>
  );
};

const styles = StyleSheet.create({
  block:{
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
