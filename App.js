import type { Node } from "react";
import React from "react";
import { MainPage } from "./src/MainPage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Details } from "./src/Details";
import { NativeBaseProvider } from "native-base/src/core/NativeBaseProvider";
import { Users } from "./src/Users";
import { Setting } from "./src/Setting";

const MyFirstStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabPage =()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen component={MainPage} name={'MainPage'} />
      <Tab.Screen component={Users} name={'Users'} />
      <Tab.Screen component={Setting} name={'Setting'} />
    </Tab.Navigator>
  )
}


const App: () => Node = () => {
  return (
    <NativeBaseProvider>
        <NavigationContainer>
          <MyFirstStack.Navigator>
            <MyFirstStack.Screen name={'TabPage'} component={TabPage} />
            <MyFirstStack.Screen name={'Details'} component={Details} />
          </MyFirstStack.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
