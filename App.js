import type { Node } from "react";
import React from "react";
import { StyleSheet, View } from "react-native";
import { FlexTable } from "./src/02_Style/FlexTable";


const App: () => Node = () => {
  return (
        <View style={styles.block}>
          <FlexTable />
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
