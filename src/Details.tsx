import React from "react";
import {SafeAreaView ,Button } from "react-native";
import {Text } from "native-base";

export const Details: React.FC = ({navigation}) => {
  return (
      <SafeAreaView>
        <Text>Details</Text>
        <Button title={"Main Page"} style={{ color: "green" }} onPress={()=> navigation.goBack()} />
      </SafeAreaView>
  );
};
