import React from "react";
import { Avatar, Box, ScrollView, Heading, Text } from "native-base";
import InfoFlatList from "../components/InfoFlatList";
import { HomeBox } from "../components/HomeBox";

export default function HomeScreen(props) {
  return (
    <ScrollView bgColor="gray.100" marginTop={2}>
      <Heading ml={2} p={2}>
        Hi! Edwin Gah,
      </Heading>
      <Text ml={2} p={2}>
        How about today
      </Text>
      <Box bgColor="white">
        <Box my={2}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <InfoFlatList
              image={require("../../assets/slide1.png")}
              title="Cutting prescription"
              title1="doctor's cost"
            />
            <InfoFlatList
              bgColor="orange.400"
              image={require("../../assets/slide1.png")}
              title="Covid causes"
              title1="and prevention"
            />
            <InfoFlatList
              bgColor="blue.400"
              image={require("../../assets/slide1.png")}
              title="General ways on "
              title1="how to avoid them"
            />
          </ScrollView>
        </Box>
      </Box>
      <Box mt={3}>
        <HomeBox />
      </Box>
    </ScrollView>
  );
}
// export default HomeScreen;
