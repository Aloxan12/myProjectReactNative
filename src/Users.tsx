import React from "react";
import {SafeAreaView ,Button } from "react-native";
import {Text } from "native-base";
// @ts-ignore

export const Users: React.FC = ({navigation}) => {
  return (
      <SafeAreaView>
        <Text>Users</Text>
        <Button title={"Main Page"} style={{ color: "green" }} onPress={()=> navigation.goBack()} />
      </SafeAreaView>
  );
};
