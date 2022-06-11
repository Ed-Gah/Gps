import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Walkthrough from "../screens/Walkthrough";
import HomeScreen from "../screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WalkThrough" component={Walkthrough} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
