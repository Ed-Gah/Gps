import React from "react";
import { Avatar, Box, ScrollView } from "native-base";
import { useWindowDimensions } from "react-native";
import { HomeBox } from "../components/HomeBox";

const Location = (props) => {
  return (
    <ScrollView bgColor="white">
      <HomeBox />
    </ScrollView>
  );
};
export default Location;
