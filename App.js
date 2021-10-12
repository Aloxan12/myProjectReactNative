import type { Node } from "react";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Details } from "./src/Details";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { Users } from "./src/Users";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainPage } from "./src/MainPage";

const MyFirstStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabPage = () => {
  return (
    <NativeBaseProvider>
      <MyFirstStack.Navigator>
        <MyFirstStack.Screen name={'Users'} component={Users} />
        <MyFirstStack.Screen name={'MainPage'} component={MainPage} />
      </MyFirstStack.Navigator>
    </NativeBaseProvider>
  );
};


const App: () => Node = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyFirstStack.Navigator>
          <MyFirstStack.Screen name={"TabPage"} component={TabPage} />
          <MyFirstStack.Screen name={"Details"} component={Details} />
          <MyFirstStack.Screen name={"MainPage"} component={MainPage} />
        </MyFirstStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
