import React from "react";
import { Image, theme, Text } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import Doctors from "../screens/Doctors";
import Location from "../screens/Location";

const Tab = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: "#A8B0C9",
        tabBarActiveTintColor: "#4174ff",
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 2,
          height: 60,
          backgroundColor: theme.colors.gray[200],
          color: theme.colors.primary[900],
        },
        headerTitleAlign: "left",
        headerStyle: {
          backgroundColor: theme.colors.gray[200],
        },
        headerTitleStyle: {
          color: theme.colors.primary[700],
          paddingLeft: parseInt(theme.space["6"], 10),
        },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Health"
        component={Doctors}
        options={{
          title: "Health",
          tabBarIcon: () => (
            <>
              <FontAwesome
                name="heartbeat"
                size={24}
                color={theme.colors.red[900]}
              />
              <Text
                fontSize="xs"
                fontWeight="bold"
                color={theme.colors.red[900]}
                pt={1}
              >
                Health
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: () => (
            <>
              <FontAwesome5
                name="home"
                size={24}
                color={theme.colors.primary[700]}
              />
              <Text
                fontSize="xs"
                fontWeight="bold"
                color={theme.colors.primary[700]}
                pt={1}
              >
                Home
              </Text>
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Location}
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: () => (
            <>
              <FontAwesome5
                name="map-marked-alt"
                size={24}
                color={theme.colors.orange[600]}
              />
              <Text
                fontSize="xs"
                fontWeight="bold"
                color={theme.colors.orange[600]}
                pt={1}
              >
                Map
              </Text>
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
