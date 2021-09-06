import type { Node } from "react";
import React from "react";
import { StyleSheet, View } from "react-native";
import { StudentsList } from "./src/04_TypeScript/TypeTasks";


const App: () => Node = () => {
  return (
        <View style={styles.block}>
          <StudentsList />
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
