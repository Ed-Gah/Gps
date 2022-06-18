import React from "react";
import {
  Avatar,
  Box,
  ScrollView,
  Image,
  HStack,
  Heading,
  VStack,
  Text,
  Center,
} from "native-base";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from "react-native-chart-kit";
import { TouchableOpacity, Dimensions } from "react-native";
import { HomeBox } from "../components/HomeBox";
import InfoFlatList from "../components/InfoFlatList";

const Doctors = ({ navigation }) => {
  return (
    <ScrollView bgColor="white" mx={1}>
      <VStack mt={4} mx={4}>
        <HStack justifyContent="space-between" alignItems={"center"}>
          <Heading color="primary.700" ml={7}>
            Edwin Gah{" "}
          </Heading>
          <TouchableOpacity
            mr="auto"
            onPress={() => navigation.navigate("Profile")}
          >
            <Avatar on bgColor="gray.200" size="md" ml="auto">
              <Image
                size={8}
                source={require("../../assets/avatar.png")}
                alt="avatar"
              />
            </Avatar>
          </TouchableOpacity>
        </HStack>
        <Heading mt={10} color="secondary.500" ml={6}>
          Current Data
        </Heading>
      </VStack>
      <Box mx={1}>
        <InfoFlatList
          bgColor="blue.500"
          image={require("../../assets/slide1.png")}
          title="Good Health 👌"
          title1="keep track everyday!"
        />
      </Box>
      <Center>
        <Text color="#FFAC44"> Analysis </Text>
      </Center>
      <Box>
        <Center>
          <Text color="#FFAC44">EdGah live chart</Text>
        </Center>
        <Box>
          <Text color="primary.700" ml={2}>
            temperature
          </Text>
          <Center mx={2}>
            <LineChart
              data={{
                labels: ["1min", "2min", "3min", "4min", "5min", "6min"],
                datasets: [
                  {
                    data: [37.2, 37.3, 37.4, 37.1, 37, 37.4],
                  },
                ],
              }}
              width={Dimensions.get("window").width}
              height={200}
              chartConfig={{
                backgroundColor: "#e26a00",
                backgroundGradientFrom: "#FF7357",
                backgroundGradientTo: "#ffa726",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
                marginHorizontal: 8,
              }}
            />
          </Center>
          <Text color="primary.700" ml="auto" mr={5}>
            time
          </Text>
        </Box>
      </Box>
      <Box>
        <HStack justifyContent="space-between" mx={8} my={2}>
          <Box bgColor="gray.50" p={3} rounded={16} shadow={2}>
            <Text color="#e26a00">See details</Text>
          </Box>
          <Box bgColor="gray.50" p={3} rounded={16} shadow={2}>
            <Text>Set goals</Text>
          </Box>
        </HStack>
      </Box>
      <Center>
        <BarChart
          data={{
            labels: ["1min", "2min", "3min", "4min", "5min", "6min"],
            datasets: [
              {
                data: [37.2, 37.3, 37.4, 37.1, 37, 37.4],
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={200}
          chartConfig={{
            backgroundColor: "#3770ED",
            backgroundGradientFrom: "#6193FF",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            marginHorizontal: 8,
          }}
        />
      </Center>
    </ScrollView>
  );
};
export default Doctors;
