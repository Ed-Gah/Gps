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
  theme,
} from "native-base";
import { LineChart, BarChart } from "react-native-chart-kit";
import { TouchableOpacity, Dimensions } from "react-native";
import InfoFlatList from "../components/InfoFlatList";
import { PatientsData } from "../components/PatientsData";

const Doctors = ({ navigation }) => {
  let [newPulse, setNewPulse] = React.useState([
    37.2, 37.3, 37.4, 37.1, 37, 37.4,
  ]);
  let [newEcg, setNewEcg] = React.useState([37.2, 37.3, 37.4, 37.1, 37, 37.4]);
  let [newSpo2, setNewSpo2] = React.useState([
    37.2, 37.3, 37.4, 37.1, 37, 37.4,
  ]);
  let [newTemperature, setNewTemperature] = React.useState([
    37.2, 37.3, 37.4, 37.1, 37, 37.4,
  ]);

  let [temperature, setTemperature] = React.useState(0);
  let [pulse, setPulse] = React.useState(0);
  let [ecg, setEcg] = React.useState(0);
  let [spo2, setSpo2] = React.useState(0);

  React.useEffect(() => {
    const getTemperature = async () => {
      try {
        const temperature = await axios.get(
          "http://192.168.100.211/temperature"
        );
        const pulse = await axios.get("");
        const ecg = await axios.get("");
        const spo2 = await axios.get("");
        setTemperature(temperature["data"]);
        setPulse(pulse["data"]);
        setEcg(ecg["data"]);
        setSpo2(spo2["data"]);
        console.log("the temperature is ", temperature["data"]);
        console.log("the pulse is ", pulse["data"]);
        console.log("the ecg is ", ecg["data"]);
        console.log("the spo2 is ", spo2["data"]);
      } catch {
        (error) => {
          console.log("error ", error);
        };
      }
    };
    getTemperature();
  }, []);

  let value = 37.4;
  React.useEffect(() => {
    const temperatureFetch = () => {
      newTemperature.unshift(value);

      if (newTemperature.length > 6) {
        const newTemp = newTemperature.pop();
        if (newTemperature) {
          setTemperature(newTemperature);
          console.log("New Temperature", newTemperature);
        }
      }
    };
    temperatureFetch();
  }, [value]);

  console.log("State temperature", newTemperature);

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
        <VStack>
          <Center>
            <Heading mt={10} color="secondary.500" ml={6}>
              Current Data
            </Heading>
          </Center>
          <Box mt={4} mx={2}>
            <HStack justifyContent="space-between">
              <VStack>
                <Heading fontSize="sm" color={theme.colors.primary[700]}>
                  Temperature
                </Heading>
                <Center>
                  <HStack mt={1}>
                    <Heading fontSize="xl" color={theme.colors.green[400]}>
                      {temperature}
                    </Heading>
                    <Text fontSize="xs" color={theme.colors.green[400]}>
                      0
                    </Text>
                    <Heading fontSize="xl" color={theme.colors.green[400]}>
                      C
                    </Heading>
                  </HStack>
                </Center>
              </VStack>
              <VStack>
                <Heading fontSize="sm" color={theme.colors.primary[700]}>
                  Pulse
                </Heading>
                <Center>
                  <HStack mt={1}>
                    <Heading fontSize="xl" color={theme.colors.green[400]}>
                      {pulse}
                    </Heading>
                    <Text fontSize="xs" color={theme.colors.green[400]}>
                      0
                    </Text>
                    <Heading fontSize="xl" color={theme.colors.green[400]}>
                      C
                    </Heading>
                  </HStack>
                </Center>
              </VStack>
              <VStack>
                <Heading fontSize="sm" color={theme.colors.primary[700]}>
                  ECG
                </Heading>
                <Center>
                  <HStack mt={1}>
                    <Heading fontSize="xl" color={theme.colors.green[400]}>
                      {pulse}
                    </Heading>
                    <Text fontSize="xs" color={theme.colors.green[400]}>
                      0
                    </Text>
                    <Heading fontSize="xl" color={theme.colors.green[400]}>
                      C
                    </Heading>
                  </HStack>
                </Center>
              </VStack>
              <VStack>
                <Heading fontSize="sm" color={theme.colors.primary[700]}>
                  SPO2
                </Heading>
                <Center>
                  <HStack mt={1}>
                    <Heading fontSize="xl" color={theme.colors.green[400]}>
                      {pulse}
                    </Heading>
                    <Text fontSize="xs" color={theme.colors.green[400]}>
                      0
                    </Text>
                    <Heading fontSize="xl" color={theme.colors.green[400]}>
                      C
                    </Heading>
                  </HStack>
                </Center>
              </VStack>
            </HStack>
          </Box>
          <PatientsData />
        </VStack>
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
                    data: newTemperature,
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
                data: newPulse,
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
                data: newEcg,
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
                data: newSpo2,
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
