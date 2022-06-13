import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import Walkthrough from "./src/screens/Walkthrough";
import HomeScreen from "./src/screens/HomeScreen";
import MainNavigator from "./src/navigation/MainNavigator";
import { NativeBaseProvider } from "native-base";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default function App() {
  const [loading, setLoading] = React.useState(true);

  const [viewedOnboarding, setViewdOnboarding] = React.useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");

      if (value != null) {
        setViewdOnboarding(true);
      }
    } catch (error) {
      console.log("Error @checkOnboarding: ", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    checkOnboarding();
  });

  return (
    <NativeBaseProvider config={config}>
      <StatusBar hidden={true} />
      {loading ? <Loading /> : <MainNavigator />}
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}
