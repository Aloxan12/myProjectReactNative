import type { Node } from "react";
import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const ImgPhone: () => Node = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};
const TextComp = (props) => {
  return (
    <View>
      <Text>{props.value}</Text>
    </View>
  );
};

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.block}>
          <Text>Hello</Text>
          <TextComp value={'My new text'} />
          <ImgPhone />
          <TextComp value={'React'} />
          <ImgPhone />
          <ImgPhone />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: "red",
    paddingHorizontal: 20,
  },
});

export default App;
