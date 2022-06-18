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
  let [pulse, setPulse] = React.useState([37.2, 37.3, 37.4, 37.1, 37, 37.4]);
  let [ecg, setEcg] = React.useState([37.2, 37.3, 37.4, 37.1, 37, 37.4]);
  let [spo2, setSpo2] = React.useState([37.2, 37.3, 37.4, 37.1, 37, 37.4]);
  let [temperature, setTemperature] = React.useState([
    37.2, 37.3, 37.4, 37.1, 37, 37.4,
  ]);

  let value = 37.3;
  React.useEffect(() => {
    const temperatureFetch = () => {
      temperature.unshift(value);

      if (temperature.length > 6) {
        const newTemperature = temperature.pop();
        if (newTemperature) {
          setTemperature(temperature);
          console.log("New Temperature", temperature);
        }
      }
    };
    temperatureFetch();
  }, []);

  console.log("State temperature", temperature);

  return (
    <ScrollView bgColor="white" mx={1}>
      <VStack mt={4} mx={4}>
        <HStack justifyContent="space-between">
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
                    data: temperature,
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
      <Text color="primary.700" ml={2}>
        pulse
      </Text>
      <Center>
        <BarChart
          data={{
            labels: ["1min", "2min", "3min", "4min", "5min", "6min"],
            datasets: [
              {
                data: pulse,
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
      <Text color="primary.700" ml={2}>
        ecg
      </Text>
      <Center>
        <LineChart
          data={{
            labels: ["1min", "2min", "3min", "4min", "5min", "6min"],
            datasets: [
              {
                data: ecg,
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={200}
          chartConfig={{
            backgroundColor: "#3770ED",
            backgroundGradientFrom: "#3770ED",
            backgroundGradientTo: "#C90DB3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
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
      <Text color="primary.700" ml={2}>
        spo2
      </Text>
      <Center>
        <BarChart
          data={{
            labels: ["1min", "2min", "3min", "4min", "5min", "6min"],
            datasets: [
              {
                data: spo2,
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={200}
          chartConfig={{
            backgroundColor: "#3770ED",
            backgroundGradientFrom: "#CCDAFF",
            backgroundGradientTo: "#132148",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
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
    </ScrollView>
  );
};
export default Doctors;
